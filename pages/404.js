import React, { useState, useEffect } from 'react'
import Router from 'next/router'

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
            <a type="button" href="/">
                Kembali Ke Home
            </a>
        </div>
    )
}