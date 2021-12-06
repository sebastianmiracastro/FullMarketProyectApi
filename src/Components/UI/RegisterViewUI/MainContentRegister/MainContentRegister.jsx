import './MainContentRegister.css';
import { SaveUser } from '../../../../Service/RegisterService'

export const MainReg = () => {
    const Save = () => {
        SaveUser('uadsad', 'asdskad', 'doasjd', 'sabhdnas', 'jsandna', 'sbadja s', 'asbdjaks', 'jdsadna', 'siadjasd', 'jasndnahsd'
        ).then(
            (Rest) => {
                console.log('sisas');
            }
        );
    }
    return(
        <>
        <div className='information'>
            <input className='#' type='text' id='#' placeholder='Nombre Completo'></input>
            <select className='#' id='#' placeholder='Tipo de Identificacion'></select>
            <input className='#' type='number' id='#' placeholder='Numero de Identificacion'></input>
            <input className='#' type='text' id='#' placeholder='Correo Electronico'></input>
            <input className='#' type='text' id='#' placeholder='Contraseña'></input>
            <select className='#' id='#' placeholder='Genero'></select>
            <input className='#' type='text' id='#' placeholder='Departamento'></input>
            <input className='#' type='text' id='#' placeholder='Municipio'></input>
            <input className='#' type='text' id='#' placeholder='Direccion'></input>
            <input className='#' type='text' id='#' placeholder='Telefono'></input>
            <button onClick={()=>Save()}></button>
        </div>
        
        </>
    )

}