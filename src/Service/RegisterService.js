const _URL = 'https://localhost:44355/'

export async function SaveUser (NombreCompleto, TD, NIdentifi, Correo, Password, Genero, Departamento, Municipio, Direccion, Telefono) {
    const endpoint = 'api/UsersRegisters'; 
    const a = `${_URL}${endpoint}`
    debugger;
    return await fetch(a, {
        mode: 'no-cors',
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
      });
}