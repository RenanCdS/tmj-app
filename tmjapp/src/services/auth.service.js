import axios from 'axios';

export const postPreRegister = async (preRegisterDto) => {
    try {
    console.log(process.env.REACT_APP_API_URL);
        return await axios.post('http://localhost:3000/api/v1/users', {
            name: preRegisterDto.name,
            cpf: preRegisterDto.cpf,
            phone: preRegisterDto.phone,
            role: preRegisterDto.role,
            email: preRegisterDto.email,
            password: preRegisterDto.password,
            genre: preRegisterDto.genre,
            birthDate: preRegisterDto.birthDate,
        });
    } catch (err) {
        return Promise.reject({
            errorCode: 5000,
            errorMessage: 'Ocorreu algum erro, tente novamente mais tarde',
            statusCode: 500
        });
    }
}
