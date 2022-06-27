import Link from 'next/link'

function Blog({ posts }) {
    console.log('cek cek page isg', posts);

    return (
        <div> 
            <h1>Halaman ISG</h1>
            <ul>
            {
                posts.meals.map(item => (
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
  
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    const posts = await res.json()
  
    return {
        props: {
            posts,
        },
        
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}
  
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
//   export async function getStaticPaths() {
//     const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
//     const posts = await res.json()
  
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.meals.map((post) => ({
//       params: { id: post.id },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: blocking } will server-render pages
//     // on-demand if the path doesn't exist.
//     return { paths, fallback: 'blocking' }
//   }

export default Blog