import React, { useEffect, useState } from "react"
import Link from 'next/link'

function Csr() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    
    console.log('cek cek halaman Csr', data);

    return (
      <div> 
        <h1>Halaman CSR</h1>
        <ul>
        {
            data.meals.map(item => (
                <li>
                    <Link key={item.id} href={{pathname: `/latihan-detail/${item.idMeal}`}}>  
                        {item.strMeal}
                    </Link>
                </li>
            ))
        }
        </ul>
      </div>
    )
}
  
export default Csr;