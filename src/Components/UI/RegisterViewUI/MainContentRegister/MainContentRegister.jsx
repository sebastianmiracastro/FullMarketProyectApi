import './MainContentRegister.css';
import React from 'react';
import axios from 'axios';
import { Router } from 'react-router';
import { SaveUser } from '../../../../Service/RegisterService';

export const MainReg = () => {

    const UrlColombia = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';


    
    axios.post('https://localhost:44355/api/UsersRegisters', {
        NombreCompleto: 'Fred',
        TD: 'Flintstone',
        NIdentifi: '13324',
        Correo: 'smasdna',
        Password: 'dasda',
        Genero: 'ajsnda',
        Departamento: 'djasnda',
        Municipio: 'ansjda',
        Direccion:'kasndma',
        Telefono:'21031'
      }).then(response => console.log(response))
      .catch(
          
      )

    return(
        <>
        <form>
            <div className='information'>
                <input name="NombreCompleto" className='#' type='text' id='#' placeholder='Nombre Completo'></input>
                <select className='#' id='#' placeholder='Tipo de Identificacion'>
                    <option value="1">Targeta De Identidad</option>
                    <option value="2">Cedula De Ciudadania</option>
                    <option value="3">Pasaporte</option>
                    <option value="4">Identificacion Extranjera</option>
                </select>
                <input className='#' type='number' id='#' placeholder='Numero de Identificacion'></input>
                <input className='#' type='text' id='#' placeholder='Correo Electronico'></input>
                <input className='#' type='password' id='#' placeholder='Contraseña'></input>
                <select className='#' id='#' placeholder='Genero'>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                    <option value="3">Transgenero</option>
                    <option value="4">Otro</option>
                    <option value="5">Indefinido</option>
                </select>
                <input className='#' type='text' id='#' placeholder='Departamento'></input>
                <input className='#' type='text' id='#' placeholder='Municipio'></input>
                <input className='#' type='text' id='#' placeholder='Direccion'></input>
                <input className='#' type='text' id='#' placeholder='Telefono'></input>
                <button id="Bt_SendUser" type="submit">
                    
                </button>
            </div>
        </form>
        </>
    )

}