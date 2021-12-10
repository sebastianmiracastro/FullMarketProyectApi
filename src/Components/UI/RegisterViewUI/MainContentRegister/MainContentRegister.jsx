import './MainContentRegister.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Router } from 'react-router';
import { SaveUser } from '../../../../Service/RegisterService';

export const MainReg = () => {

    const UrlColombia = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';

    const URLApiPost = 'http://fullmarket.somee.com/api/UsersRegisters';

    const [nombreCompleto, setNombreCompleto] = useState('');
    const [td, setTD] = useState('');
    const [nIdentifi, setNIdentifi] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [genero, setGenero] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');


    const response = async  (e) => {
        e.preventDefault()
        const res = await fetch(`${URLApiPost}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'},
                body:JSON.stringify({
                    NombreCompleto: nombreCompleto,
                    TD: td,
                    NIdentifi: nIdentifi,
                    Correo: correo,
                    Password: password,
                    Genero: genero,
                    Departamento: departamento,
                    Municipio: municipio,
                    Direccion: direccion,
                    Telefono: telefono
                })
        }) 
        if (response === true) {
            alert('Funciono')
        }
        else {
            alert('Nonas')
        }
    } 



    return(
        <>
        <form onSubmit={response}>
            <div className='information'>
                <input name="NombreCompleto" onChange={e => setNombreCompleto(e.target.value)} className='#' type='text' id='#' placeholder='Nombre Completo'></input>
                <select className='#' onChange={e => setTD(e.target.value)} id='#' placeholder='Tipo de Identificacion'>
                    <option value="Targeta De Identidad">Targeta De Identidad</option>
                    <option value="Cedula De Ciudadania">Cedula De Ciudadania</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Identificacion Extranjera">Identificacion Extranjera</option>
                </select>
                <input onChange={e => setNIdentifi(e.target.value)} className='#' type='number' id='#' placeholder='Numero de Identificacion'></input>
                <input onChange={e => setCorreo(e.target.value)} className='#' type='text' id='#' placeholder='Correo Electronico'></input>
                <input onChange={e => setPassword(e.target.value)} className='#' type='password' id='#' placeholder='Contraseña'></input>
                <select onChange={e => setGenero(e.target.value)} className='#' id='#' placeholder='Genero'>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Transgenero">Transgenero</option>
                    <option value="Otro">Otro</option>
                    <option value="Indefinido">Indefinido</option>
                </select>
                <input onChange={e => setDepartamento(e.target.value)} className='#' type='text' id='#' placeholder='Departamento'></input>
                <input onChange={e => setMunicipio(e.target.value)} className='#' type='text' id='#' placeholder='Municipio'></input>
                <input onChange={e => setDireccion(e.target.value)} className='#' type='text' id='#' placeholder='Direccion'></input>
                <input onChange={e => setTelefono(e.target.value)} className='#' type='text' id='#' placeholder='Telefono'></input>
                <button id="Bt_SendUser" type="submit">
                    
                </button>
            </div>
        </form>
        </>
    )

}