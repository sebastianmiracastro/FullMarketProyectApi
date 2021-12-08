import React, { useState } from 'react';
import axios from 'axios';

const UrlPostRegister = 'https://localhost:44355/api/UsersRegisters';

export async function SaveUser() {
    try{
        const [FormRegister, setFormRegister] = useState({
            NombreCompleto:'',
            TD:'',
            NIdentifi: '',
            Correo: '', 
            Password: '',
            Genero: '',
            Departamento: '',
            Municipio: '',
            Direccion: '',
            Telefono: ''
        });
        const handleChange=e=>{
            const {name, value} =e.target;
            setFormRegister({
                ...FormRegister,
                [name]: value
            })
            console.log(FormRegister);
        }
        const response = await axios({
            url: `${UrlPostRegister}`,
            method: 'POST',
            data: {

            }
        })

        return response;
    }catch (e) {
        console.log(e);
    }
}