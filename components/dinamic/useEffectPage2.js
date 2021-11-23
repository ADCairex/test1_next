import Head from 'next/head';
import { Navbar } from '../NavBar';

var axios = require("axios").default;

import React, { useEffect, useState } from 'react';

export default function Page2() {

    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    async function fetcher(data) {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data) 
        })
        return await res.text()
      }

    useEffect( async () => {
        const response = await fetcher({
            'text': word,
            'to': 'en;fr',
        });
        let finalRes = JSON.parse(response);
        setTranslation(finalRes.result);
    }, [word]);

    return(
        <>
            <div>
                <Head>
                    <title>Ejemplo de UseEffect</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Navbar />
                <div className='ml-4'>
                    <h1>Ejemplo de Use Effect</h1>
                    <p>Buscar en la api:</p>
                    <input className='border-solid border-2 pl-4 border-black' type='text' onChange={e => setWord(e.target.value)}/>
                    <h2>Ingles</h2>
                    <p>{translation.en}</p>
                    <h2>Frances</h2>
                    <p>{translation.fr}</p>
                </div>
            </div>
        </>
    );
}