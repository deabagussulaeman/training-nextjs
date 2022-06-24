import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dea from '../../styles/dea.module.css'

export default function detailPost() {
    const router = useRouter()
    const [dataList, setDataList] = useState();
    
    const CallApi = async () => {
        try {
            const res  = await fetch(`/api/avatars/${router.query.id}`);
            const data = await res.json();
            setDataList(data);

            console.log('get CallApi', data)
        } catch (err){
            console.log('error CallApi')
            console.log(err)
        }
    }

    // useEffect(() => {
        
        // if (getdata == false){
            // CallApi();
            // getdata = true;
        // }
    // })

    // CallApi()

    return (
        <div>
            <main>
                <div align="center">
                    <div className={dea.training}>
                        <div className={dea.img}>
                            
                        </div>
                        
                        <div align="left">
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}