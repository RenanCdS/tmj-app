import axios from 'axios';

export const postPreRegister = async (preRegisterDto) => {
    try {
        return await axios.post('http://192.168.0.171:3000/api/v1/users', 
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
