import react, {useEffect, useState, useHistory} from 'react';
import './MainContentLogin.css'
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

export const Main =(props)=>{

    const UrlRequestLogin = "https://localhost:44355/api/UsersRegisters/"

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
            if(response.length>0){
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
            }
            else{
                alert("Usuario O Contraseña Incorrectos");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    // useEffect(()=>{
    //     if(cookie.get('id')){
    //         Redirect('/UserProfile');
    //     }
    // },[]);

    return(
        <>
            <div className="ContainerAll">
                <div className="ContainerButtons">
                    <input name="Correo" onChange={handleChange} className="InputEmailContent" type="text" placeholder="Correo"></input>
                    <br/>
                    <input name="Password" onChange={handleChange} className="InputPasswordContent" type="password"  placeholder="Contraseña"></input><br/>
                    <div className="AccountLoginContent">
                        <button onClick={()=>LoginUser()} value="Iniciar_sesion">Iniciar sesion</button><br/>
                    </div>    
                    <div className="MissedButtonContent">
                        <a className="" >¿Olvidaste tu contraseña?</a><br/>
                    </div>
                    <div className="DecorationPlaceHolder">
                         <p>________________o________________</p><br/>
                    </div>
                    <div className="NewAccountButtonContent">
                    <Link to="/Register"><a value="Crear_cuenta_nueva">Crear cuenta nueva</a></Link>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default withRouter(Main);