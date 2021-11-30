import './Header.css'
import ImgLogoFullMarket from '../../../../Images/Images-MainView/FullMarket.jpeg'

export const Header =()=>{
    return(
        <>
            <div className="Container-Header">
                <img src={ImgLogoFullMarket} alt="" className="ImgContent"></img>
                <nav className="NavBarContainer">
                    <div className="ContentOptionsNavBar">
                        <a className="OptionNavbar" value="Iniciar_sesion">Iniciar sesion</a>
                        <a className="OptionNavbar" value="Registrarse">Registrarse</a>
                    </div>
                </nav>                    
            </div>
            <div className="Content-Page">

            </div>
        </>
    );
}