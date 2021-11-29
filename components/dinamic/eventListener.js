import Head from 'next/head';
import { Navbar } from '../NavBar';

import React, { useEffect, useState, useRef, ReactDOM } from 'react';


export default function eventListener() {

    const [mousePositionX, setMousePositionX] = useState('0px');
    const [mousePositionY, setMousePositionY] = useState('0px');
    const divRef = useRef();
    
    try {
        if (divRef.current.style.display == 'none') {
            divRef.current.style.display = 'block';
        }
        divRef.current.style.left = mousePositionX;
        divRef.current.style.top = mousePositionY;
    } catch(e) {
        console.error(e);
    }
    function eventChange(e) {
        //console.log(String(e.clientX));
        setMousePositionX(String(e.clientX)+'px');
        setMousePositionY(String(e.clientY)+'px');

        
        console.log(mousePositionX);
        //console.log(divRef.current.style.left);
        //divRef.current.style.top = mousePositionY + 'px';
    }
  

    useEffect(() => {
        window.addEventListener('mousemove', eventChange);
        return () => {window.removeEventListener('mousemove', eventChange);}
    },[])

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
                <div className='w-10 h-10 bg-red-500 absolute left-72 top-32' ref={divRef}>

                </div>
            </div>
        </>
    );
}