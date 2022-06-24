import { useState } from 'react'
import styles from '../styles/dea.module.css'
import Link from 'next/link'

export default function Home() {
    const [dataList, setDataList] = useState();
    const CallApi = async () => {
        try {
            const res  = await fetch(`/api/avatars`);
            const data = await res.json();
            setDataList(data);

            console.log('get CallApi', data)
        } catch (err){
            console.log('error CallApi')
            console.log(err)
        }
    }

    return (
        <div>
            <main className={styles.listboxCOntainer}>
                <button type="button" onClick={CallApi}>
                    Klik me for get data
                </button>
                
                {
                    dataList && (
                        <h1>List data avatar</h1>
                    )
                }

                <ul className={styles.listboxul}>
                    {
                        dataList && dataList.map(item => (
                            <Link key={item.id} href={{
                                pathname: `/posts/${item.id}`, 
                                query: {
                                    id: item.id,
                                    title: item.nama, 
                                    gender: '',  
                                    profession: '', 
                                    position: item.deskripsi,
                                    image: item.photoUrl,
                                }
                            }} as={`/posts/${item.id}`}>  
                                <li className={styles.listboxli}>{item.nama}</li>
                            </Link>
                        ))
                    }
                </ul>
            </main>
        </div>
    )
}