import './HeaderContentLogin.css'
import ImageContentHeader from '../../../../Images/Images-LoginView/FullMarketLogin.jpeg'

export const HeaderLogin =()=>{
    return(
        <>
            <div className="ContainerProgram">
                <img src={ImageContentHeader} alt="" className="ImageContentHeader"></img>
                <h1 className="TittleContentIni">Iniciar Sesion</h1>
                <p className="TxTContentLogin">Inicia sesion aquí totalmente gratis 
                para una excelente experencia</p>
            </div>
        </>
    );
}