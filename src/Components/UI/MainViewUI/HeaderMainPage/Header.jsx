import './Header.css'
import ImgLogoFullMarket from '../../../../Images/Images-MainView/FullMarket.jpeg'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom';

>>>>>>> cambios_ed

export const Header =()=>{
    return(
        <>
            <div className="Container-Header">
                <img src={ImgLogoFullMarket} alt="" className="ImgContent"></img>
                <nav className="NavBarContainer">
                    <div className="ContentOptionsNavBar">
<<<<<<< HEAD
                        <Link className="OptionNavbar" value="Iniciar_sesion" to="/Login">
                            <button className="ButtonLoginInitial">Iniciar Sesion</button>
                        </Link>
                        <a className="OptionNavbar" value="Registrarse">Registrarse</a>
=======
                        <Link to="/"><a className="OptionNavbar" value="Iniciar_sesion">Home</a></Link>
                        <Link to="/Login"><a className="OptionNavbar" value="Iniciar_sesion">Iniciar sesion</a></Link>                        
>>>>>>> cambios_ed
                    </div>
                </nav>                    
            </div>
            <div className="Content-Page">
            </div>
        </>
    );
}