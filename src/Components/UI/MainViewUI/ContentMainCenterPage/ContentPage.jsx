import './ContentPage.css'
import ImageFS from '../../../../Images/Images-MainView/SaleMain.jpeg'

export const Main=()=>{
    return(
        <>
            <div className="MainContainer">
                <div className="ContentTxT">
                    <h1 className="TittleContent">Bienvenidos a FullMarket </h1>
                    <p className="TextContent">Registrate e inicia sesion si no estas 
                    resgistrado; para vivir una maravillosa experiencia</p>
                </div>
                <img src={ImageFS} alt="" className="ImageContent"></img>
            </div>
            <div className="ContentFinish"></div>
        </>
    );
}