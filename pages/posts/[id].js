import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dea from '../../styles/dea.module.css'

export default function detailPost() {
    const router = useRouter()
    const [detail, setDetail] = useState()
    const { id } = router.query

    const CallApi = async () => {
        try {
            console.log('get CallApi id 2', id)

            if(id && !detail){
                const res  = await fetch('/api/avatars/'+id);
                const data = await res.json();
                setDetail(data);

                console.log('get CallApi', data)
                console.log('get CallApi avatars', dataList)
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