import axios from 'axios';
import { REACT_APP_API_URL } from '../utils/config';

export const postPreRegister = async (preRegisterDto) => {
    try {
        return await axios.post(`${REACT_APP_API_URL}/api/v1/users`, 
        {
            name: preRegisterDto.name,
            cpf: preRegisterDto.cpf,
            phone: preRegisterDto.phone,
            role: parseInt(preRegisterDto.role),
            email: preRegisterDto.email,
            password: preRegisterDto.password,
            genre: preRegisterDto.genre,
            birthDate: preRegisterDto.birthDate,
        });
    } catch (err) {
        return Promise.reject(err);
    }
}

export const postLogin = async (loginDto) => {
    try {
        return await axios.post(`${REACT_APP_API_URL}/api/v1/auth/login`, 
        {
            email: loginDto.email,
            password: loginDto.password
        });
    } catch (err) {
        return Promise.reject(err);
    }
}

export const postForgottenPassword = async (passwordResetDto) => {
    try {
        return await axios.post(`${REACT_APP_API_URL}/api/v1/auth/password-reset`, 
        {
            email: passwordResetDto.email
        });
    } catch (err) {
        return Promise.reject(err);
    }
}
