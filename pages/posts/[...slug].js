import { UseState } from 'react'
import { UseRouter } from 'next/router'
import Image from 'next/image'
import dea from '../../styles/dea.module.css'

export default function detailPost() {
    const router = UseRouter();
    const [detail, setDetail] = UseState();
    // const { id } = router.query.id
    const id = router.query.id;

    const CallApi = async () => {
        console.log('router cek cek ', id);
        try {
            if(id && !detail){
                const res  = await fetch('/api/avatars/'+id);
                const data = await res.json();
                setDetail(data);
            }
        } catch (err){
            console.log('error CallApi')
            console.log(err)
        }
    }

    CallApi()

    return (
        <div>
            <main>
                {
                    detail && (
                        <div align="center">
                            <div className={dea.training}>
                                <div className={dea.img}>
                                    <Image 
                                        src={detail.photoUrl}
                                        height="500"
                                        width="500"
                                        layout='responsive'
                                        alt={detail.nama}
                                    />
                                </div>
                                
                                <div align="left">
                                    <ul className={dea.listboxul}>
                                        <li className={dea.listboxli}>
                                            <span>Nama </span>
                                            <b className={dea.fltright}>{detail.nama}</b>
                                        </li>
                                        <li className={dea.listboxli}>
                                            <span>Deskripsi </span>
                                            <b className={dea.fltright}>{detail.deskripsi}</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </main>
        </div>
    )
}