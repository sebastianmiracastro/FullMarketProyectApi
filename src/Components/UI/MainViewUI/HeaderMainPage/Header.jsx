import './Header.css'
import LogoFullMarket from '../../../../Images/Images-MainView/FullMarket.png'
import { Link } from 'react-router-dom';


export const Header =()=>{
    return(
        <>
            <div className="header">
                <img src={LogoFullMarket} alt="" className="LogoFullMarket"></img>
                <nav className="NavBar">
                    <div className="NavBarOptions">
                        <Link to="/Login"><a value="Iniciar_sesion">Iniciar sesión</a></Link>
                        <Link to="/Register"><a value="Iniciar_sesion">Registrarse</a></Link>                         
                    </div>
                </nav>                    
            </div>
            <div className="spaceHeader">
            </div>
        </>
    );
}