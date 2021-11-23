import Head from 'next/head';
import { Navbar } from '../../components/NavBar';

import React, { useState } from 'react';

export default function Page1() {

    const [count, setCount] = useState(0);

    function addCount() {
        setCount(prevCount => prevCount + 1);
    }
    
    function removeCount() {
        setCount(prevCount => prevCount - 1);
    }

    return(
        <>
            <div className='flex flex-col'>
                <Head>
                    <title>Ejemplo UseState</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Navbar />
                <h1 className='m-auto my-4 text-4xl'>Ejemplo de Use state</h1>
                <div className='flex m-auto'>
                    <button onClick={addCount} className='w-10 h-10 bg-red-300'>+</button>
                    <p className='m-auto mx-10'>{count}</p>
                    <button onClick={removeCount} className='w-10 h-10 bg-red-300'>-</button>                
                </div>
            </div>
        </>
    );
}