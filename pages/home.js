import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useState } from 'react'
// import HelloComponent from './../components/Hello'
const HelloComponent = dynamic(() => import("../components/Hello"), {
  loading: () => <b>Loading duluu.......</b>,
  ssr:true,
});

export default function Home() {
  const [temp, setTemp] = useState();
  // const temp = 'show';

  const showHide = async () => {
    if(temp == 'show'){
      setTemp('hide');
    } else {
      setTemp('show');
    }

    console.log('cek cek ', temp);
  }

  return ( 
    <div className="training-home">  
        <h1>
          Home Component
        </h1>

        <button type="button" onClick={showHide}>
          show & hide 
        </button> <br /><br />
        
        {
          temp == 'show' && (
            <HelloComponent />
          )
        }
    </div>
  )
}