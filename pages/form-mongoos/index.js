import Head from 'next/head';
import { Navbar } from '../../components/NavBar';

import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

export default function form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);


    // On load component first render
    useEffect(() => {
        
        loadUsers();

        return () => {
            // On dismount
            
        }

    }, [])

    async function getUsers() {
        const res = await fetch('/api/users', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await res.text();
    }

    async function postUser(data) {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data) 
        })
        return await res.text();
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let newPerson = {
            'name': name,
            'email': email
        }

        postUser(newPerson)
            .then(response => JSON.parse(response))
            .then(data => {
                if (data.success == true) {
                    alert('Usuario agregado');
                    loadUsers();
                } else {
                    alert('Error al agregar usuario');
                }             
            });
    }

    const loadUsers = () => {
        getUsers()
            .then(response => JSON.parse(response))
            .then(data => {
                setPeople(data.data);
            });
    }

    //loadUsers();

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