import react, {useEffect, useState} from 'react';
import './MainContentLogin.css'
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

export const Main = () =>{

    const UrlRequestLogin = "https://www.fullmarket.somee.com/api/UsersRegisters/"

    const cookie = new Cookies();

    const [Form, setForm] = useState({
        Correo:'',
        Password:''
    });
    const handleChange=e=>{
        const {name, value} =e.target;
        setForm({
            ...Form,
            [name]: value
        })
        console.log(Form);
    }

    const LoginUser=async() => {
        await axios.get(UrlRequestLogin+`${Form.Correo}/${(Form.Password)}`)
        .then(response=> {
            return response.data;
        }).then(response => {
            if (response.length>0) {
                let answer=response[0];
                cookie.set('id', answer.id, {path: '/'});
                cookie.set('NombreCompleto', answer.nombreCompleto, {path: '/'});
                cookie.set('TD', answer.td, {path: '/'});
                cookie.set('NIdentifi', answer.nIdentifi, {path: '/'});
                cookie.set('Correo', answer.correo, {path: '/'});
                cookie.set('Password', answer.password, {path: '/'});
                cookie.set('Genero', answer.genero, {path: '/'});
                cookie.set('Departamento', answer.departamento, {path: '/'});
                cookie.set('Municipio', answer.municipio, {path: '/'});
                cookie.set('Direccion', answer.direccion, {path: '/'});
                cookie.set('Telefono', answer.telefono, {path: '/'});
                alert("Bienvenido " + answer.nombreCompleto);
                window.location = '/UserProfile';
            }
            else{
                alert("Usuario O Contraseña Incorrectos");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(()=>{
         if(cookie.get('id')){
            window.location = '/UserProfile';
        }
    },[]);

    return(
        <>
            <div className="ContainerAll1">
                <div className="ContainerButtons1">
                    <h3>Iniciar Sesión</h3>
                    <input name="Correo" onChange={handleChange} className="Input1" type="email" placeholder=" Correo Electrónico"></input>
                    <br/>
                    <input name="Password" onChange={handleChange} className="Input1" type="password"  placeholder=" Contraseña"></input><br/>
                    <button onClick={()=>LoginUser()} value="Iniciar_sesion">Iniciar Sesión</button>  
                    <div className="MissedButtonContent1">
                        <li >¿Olvidaste tu contraseña?</li><br/>
                    </div>
                    <div className="DecorationPlaceHolder1">
                        <p>________________________________</p><br/>
                    </div>
                    <Link to="/Register"><a value="Crear_cuenta_nueva">Crear cuenta nueva</a></Link>
                </div>
            </div>
        </>
    );
}

export default withRouter(Main);