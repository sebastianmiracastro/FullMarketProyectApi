import './ContentPage.css'
import ImgMain from '../../../../Images/Images-MainView/Main.jpeg'

export const Main=()=>{
    return(
        <>
        <div className='body'>
            <h1>¿Te surgen inconformidades con productos que ya no utilizas o bien;<br></br> necesitas productos en buen estado sin necesidad de gastar tu dinero?. En<br></br>
            FullMarket te enseñamos la mejor de las opciones  para brindarte la solucion<br></br>
            a las posibles inconformidades que te surgen con tus objetos.<br></br>
            <br></br>¡¡FullMarket les da la oportunidad de ser reutilizados por alguien más<br></br> o mejor aún; INTERCAMBIARLOS!! </h1>
            <img src={ ImgMain } alt="" className="imgMain"></img>
        </div>
        </>
    );
}