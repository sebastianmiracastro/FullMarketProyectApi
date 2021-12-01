import './Header.css'
import ImgLogoFullMarket from '../../../../Images/Images-MainView/FullMarket.jpeg'
import { Link } from 'react-router-dom'

export const Header =()=>{
    return(
        <>
            <div className="Container-Header">
                <img src={ImgLogoFullMarket} alt="" className="ImgContent"></img>
                <nav className="NavBarContainer">
                    <div className="ContentOptionsNavBar">
                        <Link className="OptionNavbar" value="Iniciar_sesion" to="/Login">
                            <button className="ButtonLoginInitial">Iniciar Sesion</button>
                        </Link>
                        <a className="OptionNavbar" value="Registrarse">Registrarse</a>
                    </div>
                </nav>                    
            </div>
            <div className="Content-Page">

            </div>
        </>
    );
}