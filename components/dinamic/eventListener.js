import Head from 'next/head';
import { Navbar } from '../NavBar';

import React, { useEffect, useState } from 'react';

export default function eventListener() {
    return(
        <>
            <div className='flex flex-col'>
                <Head>
                    <title>Ejemplo de UseEffect</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Navbar />
                <h1>Drawing with mouse events</h1>
                <canvas className='border-2 border-gray-900 h-96 w-96' id="myPics">

                </canvas>
            </div>
        </>
    );
}