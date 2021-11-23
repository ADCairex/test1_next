import Head from 'next/head';
import { Navbar } from '../../components/NavBar';

import React, { useState } from 'react';

export default function form() {

    const [name, setName] = useState('');
    const [surnames, setSurnames] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault()
        let newPerson = {
            'name': name,
            'surnames': surnames,
            'email': email
        }
        setPeople(oldPeople => [...oldPeople, newPerson]);
    }

    return(
        <>
            <div className='flex flex-col'>
                <Head>
                    <title>Ejemplo UseState</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <Navbar />
                <h1 className='m-auto my-4 text-4xl'>Formulario</h1>
                <div className='flex m-auto'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <p>Nombre:</p>
                        <input className='border-solid border-2 pl-4 border-black' type='text' onChange={e => setName(e.target.value)}></input>
                        <p>Apellidos:</p>
                        <input className='border-solid border-2 pl-4 border-black' type='text' onChange={e => setSurnames(e.target.value)}></input>
                        <p>Email:</p>
                        <input className='border-solid border-2 pl-4 border-black' type='text' onChange={e => setEmail(e.target.value)}></input>
                        <button className='ml-0 mt-1 w-min bg-blue-400 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-100 hover:border-blue-400 rounded'>Enviar</button>
                    </form>
                </div>
                <div className='flex flex-wrap'>
                    {people.map((person, index) => {
                        return (
                            <>
                                    <div className='m-5'>
                                        <p className='font-bold text-2xl'>Persona {index}</p>
                                        <p><span className='font-bold text-xl'>Nombre:</span> {person.name}</p>
                                        <p><span className='font-bold text-xl'>Apellidos:</span> {person.surnames}</p>
                                        <p><span className='font-bold text-xl'>Email:</span> {person.email}</p>
                                    </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}