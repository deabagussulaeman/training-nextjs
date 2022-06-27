import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY_BY_ID } from '@/schemaPgsql/schema'

function Page() {
    const router = useRouter();
    const id = router.query.id;
    
    const {loading, error, data} = useQuery(GET_CATEGORY_BY_ID, {
        variables : {
            id
        }
    })
    
    console.log('cek cek Halaman pgsql/[id].js', data)

    if (error)   return `Error! ${error.message}`;
    if (loading) return (
        <div> 
            <h1>Loading..</h1>
        </div>
    )

    return (
      <div> 
        <h1>Halaman Category {data.category.name}</h1>
        <ul>
            {
                data.category.products.items.map(item => (
                    <li key={item.sku}>    
                        <Link href={`/pgsql/product/${item.sku}`}>  
                            {item.sku+' = '+item.name}
                        </Link>
                    </li>
                )) 
            }
        </ul>
      </div>
    )
}
  
export default Page  