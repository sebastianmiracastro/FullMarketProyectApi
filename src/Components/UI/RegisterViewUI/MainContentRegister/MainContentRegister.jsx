import './MainContentRegister.css';
import React from 'react';
import axios from 'axios';
import { Router } from 'react-router';

export const MainReg = () => {



    return(
        <>
        <form>
            <div className='information'>
                <input className='#' type='text' id='#' placeholder='Nombre Completo'></input>
                <select className='#' id='#' placeholder='Tipo de Identificacion'></select>
                <input className='#' type='number' id='#' placeholder='Numero de Identificacion'></input>
                <input className='#' type='text' id='#' placeholder='Correo Electronico'></input>
                <input className='#' type='text' id='#' placeholder='Contraseña'></input>
                <select className='#' id='#' placeholder='Genero'></select>
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