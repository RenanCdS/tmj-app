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
