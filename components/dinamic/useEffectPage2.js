import Head from 'next/head';
import { Navbar } from '../NavBar';

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
            <div className='flex flex-col'>
                <Head>
                    <title>Ejemplo de UseEffect</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Navbar />
                <div className='m-auto'>
                    <h1 className='m-auto my-4 text-4xl'>Ejemplo de Use Effect</h1>
                    <p>Buscar en la api:</p>
                    <textarea className='border-solid border-2 pl-4 border-black' type='text' onChange={e => setWord(e.target.value)}/>
                </div>
            </div>
            <div className='flex flex-row m-auto w-min space-x-60'>
                <div className='w-96'>
                    <h2 className='m-auto my-4 text-3xl w-min'>Ingles</h2>
                    <p>{translation.en}</p>
                </div>
                <div className='w-96'>
                    <h2 className='m-auto my-4 text-3xl w-min'>Frances</h2>
                    <p>{translation.fr}</p>
                </div>
            </div>
        </>
    );
}