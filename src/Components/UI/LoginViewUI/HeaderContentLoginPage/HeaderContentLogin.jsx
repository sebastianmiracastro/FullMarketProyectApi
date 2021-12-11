import './HeaderContentLogin.css'
import LoginHeader from '../../../../Images/Images-LoginView/FullMarket.png'

export const HeaderLogin =()=>{
    return(
        <>
            <div className="loginContainer">
                <img src={LoginHeader} alt="Logo-FullMarket" className="loginHeader"></img>
            </div>
        </>
    );
}