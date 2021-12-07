import react, { useEffect } from "react";
import Cookies from "universal-cookie/es6";
import './MainUserProfile.css'
import axios from "axios";

export function MainUserProfile(props) {

    const cookies = new Cookies();

    const CloseSession =()=>{
        cookies.remove('id', {path:'/'});
        cookies.remove('NombreCompleto', {path:'/'});
        cookies.remove('TD', {path:'/'});
        cookies.remove('NIdentifi', {path:'/'});
        cookies.remove('Correo', {path:'/'});
        cookies.remove('Password', {path:'/'});
        cookies.remove('Genero', {path:'/'});
        cookies.remove('Departamento', {path:'/'});
        cookies.remove('Municipio', {path:'/'});
        cookies.remove('Direccion', {path:'/'});
        cookies.remove('Telefono', {path:'/'});
        window.location = '/Login';
        
    }
    useEffect(() => {
        if(!cookies.get('id')){
            window.location = '/Login'
        }
    },[]);

    return (

        <div>
            <button onClick={()=>CloseSession()} className="CloseSesSionButton">Cerrar Sesion</button>
            <h5>ID: {cookies.get('id')}</h5>
            <h5>Nombre Completo: {cookies.get('NombreCompleto')}</h5>
            <h5>Tipo De Documento: {cookies.get('TD')}</h5>
            <h5>Numero De Identificacion: {cookies.get('NIdentifi')}</h5>
            <h5>Correo: {cookies.get('Correo')}</h5>
            <h5>Contraseña: {cookies.get('Password')}</h5>
            <h5>Genero: {cookies.get('Genero')}</h5>
            <h5>Departamento: {cookies.get('Departamento')}</h5>
            <h5>Municipio: {cookies.get('Municipio')}</h5>
            <h5>Direccion: {cookies.get('Direccion')}</h5>
            <h5>Telefono: {cookies.get('Telefono')}</h5>
        </div>
    )
}

export default MainUserProfile;