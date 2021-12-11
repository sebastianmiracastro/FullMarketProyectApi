import './MainContentRegister.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Router } from 'react-router';
import { SaveUser } from '../../../../Service/RegisterService';
import { Link } from 'react-router-dom';

export const MainReg = () => {

    const UrlColombia = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';

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
        axios.post('https://www.fullmarket.somee.com/api/UsersRegisters/', {
            
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
          .then(function (response) {
            console.log(response);
            window.location = '/Login';
          })
          .catch(function (error) {
            console.log(error);
          });
        }

    return(
        <>
        <form onSubmit={response}>
            <div className='ContainerAll'>
                <div className='ContainerButtons'>
                <h3>Registrarse</h3>
                <input className='inputInfo' name="NombreCompleto" onChange={e => setNombreCompleto(e.target.value)} type='text' id='#' placeholder='Nombre Completo'></input>
                <input className='inputInfo' onChange={e => setTD(e.target.value)} id='#' placeholder='Tipo de Identificacion' />
                <input className='inputInfo' onChange={e => setNIdentifi(e.target.value)} type='number' id='#' placeholder='Numero de Identificacion'></input>
                <input className='inputInfo' onChange={e => setCorreo(e.target.value)} type='text' id='#' placeholder='Correo Electronico'></input>
                <input className='inputInfo' onChange={e => setPassword(e.target.value)} type='password' id='#' placeholder='Contraseña'></input>
                <input className='inputInfo' onChange={e => setGenero(e.target.value)} id='#' placeholder='Genero' />
                <input className='inputInfo' onChange={e => setDepartamento(e.target.value)} type='text' id='#' placeholder='Departamento'></input>
                <input className='inputInfo' onChange={e => setMunicipio(e.target.value)} type='text' id='#' placeholder='Municipio'></input>
                <input className='inputInfo' onChange={e => setDireccion(e.target.value)} type='text' id='#' placeholder='Direccion'></input>
                <input className='inputInfo' onChange={e => setTelefono(e.target.value)} type='text' id='#' placeholder='Telefono'></input>
                <button id="Bt_SendUser" type="submit">Registrarse</button>
                <div className="DecorationPlaceHolder">
                    <p>________________________________</p><br/>
                </div>
                <Link to="/Login"><a value="Iniciar Sesion">Iniciar Sesión</a></Link> 
            </div>
            </div>
        </form>
        </>
    )

}