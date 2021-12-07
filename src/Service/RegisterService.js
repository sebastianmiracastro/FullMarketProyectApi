import React from 'react';
import axios from 'axios';

const UrlPostRegister = 'https://localhost:44355/api/UsersRegisters';

export async function SaveUser(UserData){
    try{
        const response = await axios({
            url: `${UrlPostRegister}`,
            method: 'POST',
            data: UserData,
        })

        return response;
    }catch (e) {
        console.log(e);
    }
}