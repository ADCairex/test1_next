import Head from 'next/head';
import { Navbar } from '../NavBar';

import React, { useEffect, useState } from 'react';

export default function eventListener() {
    
    const [mousePositionX, setMousePositionX] = useState(0);
    const [mousePositionY, setMousePositionY] = useState(0);
    
    window.addEventListener('mousemove', e => {
        setMousePositionX(e.offsetX);
        setMousePositionY(e.offsetY);
        
        console.log(mousePositionX, mousePositionY);
    }); 


    /* useEffect(() => {
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
                <div ref={div} className='w-10 h-10 bg-red-400 absolute'>

                </div>
            </div>
        </>
    );
}