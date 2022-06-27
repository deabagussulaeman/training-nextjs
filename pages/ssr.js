import Link from 'next/link'

function Page({ data }) {
    console.log('cek cek halaman ssr', data);

    return (
      <div> 
        <br /><br /><br />
        <h1>Halaman SSR</h1>
        {
            data.meals.map(item => (
                <ul>
                    <li>
                        <Link key={item.id} href={{pathname: `/latihan-detail/${item.idMeal}`}}>  
                            {item.strMeal}
                        </Link>
                    </li>
                </ul>
            ))
        }
      </div>
    )
}
  
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Page  