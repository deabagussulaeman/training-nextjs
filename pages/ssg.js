import Link from 'next/link'

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
    console.log('cek cek halaman ssg', posts);

    return (
        <div> 
            <h1>Halaman SSG</h1>
            {
                posts.meals.map(item => (
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
  
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
  
export default Blog