import {useState} from 'react'
import parse from 'html-react-parser'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import { GET_PRODUCT_BY_SKU, SUBSCRIBE } from '@/schemaPgsql/schema'
import Image from 'next/image'

function Page() {
    const [email, setEmail] = useState('');
    const [mutationResponse, setMutationResponse] = useState(null);

    const router = useRouter();
    const sku    = router.query.sku;

    const {loading, error, data} = useQuery(GET_PRODUCT_BY_SKU, {
        variables : {
            sku
        }
    })

    const [subscribe] = useMutation(SUBSCRIBE, {
        onCompleted: (data) => {
            console.log('cek cek subscribe ', data) // the response
            setMutationResponse(data)
        },
    });

    if (error) return `Error! ${error.message}`;
    if (loading) return (
        <div> 
            <h1>Loading..</h1>
        </div>
    )

    console.log('cek cek Halaman pgsql/product/[sku].js', data)
    
    function handleSubscribe(event) {
        event.preventDefault();
        subscribe({ variables: { email } });
    }

    return (
        <div> 
            <h1>Halaman Product</h1>

            <Image 
                width={150}
                height={150}
                src={data.products.items[0].image.url}
                placeholder="blur"
                blurDataURL={data.products.items[0].image.url}
            />  

            <ul>
                <li>
                    Nama Produk: {data.products.items[0].name}
                </li>
                <li>
                    Harga Produk: Rp. {data.products.items[0].price_range.minimum_price.final_price.value} S/d Rp. {data.products.items[0].price_range.maximum_price.final_price.value}
                </li>
                <li>
                    Deskripsi: {parse (data.products.items[0].description.html)}
                </li>
            </ul>

            <h3>Subscribe</h3>
            <form onSubmit={handleSubscribe} >
                <input onChange={(event) => setEmail(event.target.value)} />
                <br />
                <button type="submit">Subscribe</button>
            </form>
            {mutationResponse && (<>{mutationResponse.subscribe.status.message}</>)}
        </div>
    )
}
  
export default Page  