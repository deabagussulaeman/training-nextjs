import Image from 'next/image'
import dea from '../../styles/dea.module.css'

function Page({ detail }) {
    console.log('cek cek halaman detail', detail);

    return (
        <div align="center">
            <div className={dea.training}>
                <div className={dea.img}>
                    <Image
                        src={detail.strMealThumb}
                        alt="Picture of the author"
                        placeholder='blur'
                        blurDataURL={detail.strMealThumb}
                        width="70%"
                        height="70%"
                        layout='responsive'
                    />
                </div>
                
                <div align="left">
                    <ul className={dea.listboxul}>
                        <li className={dea.listboxli}>
                            <span>Nama </span>
                            <b className={dea.fltright}>{detail.strMeal}</b>
                        </li>

                        <li className={dea.listboxli}>
                            <span>Video</span>
                            <a href={detail.strYoutube} className={dea.fltright}>
                                Click me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
  
export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return {
      props: {
          detail: data.meals[0],
      },
    }
}

export default Page  