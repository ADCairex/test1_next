import Head from 'next/head';
import { Navbar } from '../NavBar';

import React, { useEffect, useState, ReactDOM } from 'react';


export default function eventListener() {

    const [mousePositionX, setMousePositionX] = useState('0px');
    const [mousePositionY, setMousePositionY] = useState('0px');    
    
    window.addEventListener('mousemove', e => {
        //console.log(mousePositionX, mousePositionY);
        try {
            setMousePositionX(e.offsetX);
            setMousePositionY(e.offsetY);

            let div = document.getElementById('divMove').style
            
            div.left = mousePositionX + 'px';
            div.top = mousePositionY + 'px';
        } catch {
            console.log();
        }
        
    }); 

    /* 
    useEffect(() => {
            console.log(mousePosition);
    }, mousePosition);
    */
    return(
        <>
            <div className='flex flex-col'>
                <Head>
                    <title>Ejemplo de UseEffect</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Navbar />
                <div className='w-10 h-10 bg-red-500 absolute' id='divMove'>

                </div>
            </div>
        </>
    );
}