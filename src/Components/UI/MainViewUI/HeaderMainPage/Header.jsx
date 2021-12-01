import './Header.css'
import ImgLogoFullMarket from '../../../../Images/Images-MainView/FullMarket.jpeg'
import { Link } from 'react-router-dom';


export const Header =()=>{
    return(
        <>
            <div className="Container-Header">
                <img src={ImgLogoFullMarket} alt="" className="ImgContent"></img>
                <nav className="NavBarContainer">
                    <div className="ContentOptionsNavBar">
                        <Link to="/"><a className="OptionNavbar" value="Iniciar_sesion">Home</a></Link>
                        <Link to="/Login"><a className="OptionNavbar" value="Iniciar_sesion">Iniciar sesion</a></Link>                        
                    </div>
                </nav>                    
            </div>
            <div className="Content-Page">
            </div>
        </>
    );
}