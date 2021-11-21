import Head from 'next/head';
import { Navbar } from '../NavBar';

var axios = require("axios").default;

import React, { useEffect, useState } from 'react';

export default function Page2() {

    const [word, setWord] = useState('');
    const [items, setItems] = useState([]);

    const apiCall = async () => {

        return await fetch("https://rimedia-translation.p.rapidapi.com/api_translate_limited.php", {
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "x-rapidapi-host": "rimedia-translation.p.rapidapi.com",
                "x-rapidapi-key": "cbd567adeemshe681b53881b3b10p117203jsnf0728e95378e"
            },
            "body": {
                "text": "Hello world try, HELLO",
                "protected": "world;World",
                "from": "en",
                "to": "es;fr;ar",
                "translate_capital": "true"
            }
        });
    }

    useEffect(() => {

        return apiCall().then(response);
        
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
                </div>
            </div>

            <ul className="my-10">
                {items.map((item, index) => {
                    return <li key={index} className=''>{JSON.stringify(item)}</li>
                })}
            </ul>
        </>
    );
}