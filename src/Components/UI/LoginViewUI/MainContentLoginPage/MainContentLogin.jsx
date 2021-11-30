import './MainContentLogin.css'

export const Main =()=>{
    return(
        <>
            <div className="ContainerAll">
                <div className="ContainerButtons">
                    <input className="InputEmailContent" placeholder="E-MAIL"></input>
                    <br/>
                    <input className="InputPasswordContent" type="password"  placeholder="PASSAWORD"></input><br/>
                    <div className="AccountLoginContent">
                        <a value="Iniciar_sesion">Iniciar sesion</a><br/>
                    </div>    
                    <div className="MissedButtonContent">
                        <a className="" >¿Olvidaste tu contraseña?</a><br/>
                    </div>
                    <div className="DecorationPlaceHolder">
                         <p>________________o________________</p><br/>
                    </div>
                    <div className="NewAccountButtonContent">
                        <a value="Crear_cuenta_nueva">Crear cuenta nueva</a>
                    </div> 
                </div>
            </div>
        </>
    );
}