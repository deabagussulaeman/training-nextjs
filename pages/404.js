import React, { useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'

export default function Custom404() {
    useEffect(() => {
        const time_count = 0;

        const intv = setInterval(function(){ 
            time_count++;
            console.log('detik ke ', time_count)

            if(time_count === 5 ){
                clearInterval(intv);
                console.log('redirect to page home')
                Router.push('/')
            }
        }, 1000);
    })
    
    return ( 
        <div className="training-home">  
            <h1>404 - Halaman Error</h1>
            <Link type="button" href="/">
                Kembali Ke Home
            </Link>
        </div>
    )
}