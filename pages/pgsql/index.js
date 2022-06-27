import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from './schema'
import Image from 'next/image'
import styles from '../../styles/dea.module.css'

function Page() {
    const {loading, error, data}  = useQuery(GET_CATEGORIES)
    console.log('cek cek Halaman pgsql/index.js', data)

    if (error)   return `Error! ${error.message}`;
    if (loading) return (
        <div> 
            <h1>Loading..</h1>
        </div>
    )

    return (
      <div> 
        <h1>Halaman PGSQL</h1>
        
        <ul className={styles.listboxul}>
            {
                data.categories.items.map(item => (
                    <li className={styles.listboxli} key={item.id}>
                        {
                            item.image && <Image
                                src={item.image}
                                alt={item.name}
                                placeholder='blur'
                                blurDataURL={item.image}
                                width="50"
                                height="50"
                                className='imgIcon'
                            />
                        }
                        
                        <Link href={{pathname: `/pgsql/${item.id}`}}>  
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
        
      </div>
    )
}
  
export default Page  