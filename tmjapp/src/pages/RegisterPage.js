import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView, Alert  } from 'react-native';
import { TextInput, RadioButton, Button, HelperText } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { postPreRegister } from '../services/auth.service';
import Moment from 'moment';

const RegisterPage = () => {

    const [preRegister, setPreRegister] = useState({
        name: '',
        cpf: '',
        phone: '',
        role: '',
        email: '',
        password: '',
        genre: '',
        birthDate: ''
    });

     const [errors, setErrors] = useState({});


    const isFormValid = () => {
        let _errors = {};
        if (!preRegister.name) _errors.name = 'esse campo é obrigatório';
        if (!preRegister.email) _errors.email = 'esse campo é obrigatório';
        if (!preRegister.phone) _errors.phone = 'esse campo é obrigatório';
        if (!preRegister.role) _errors.role = 'esse campo é obrigatório';
        if (!preRegister.genre) _errors.genre = 'esse campo é obrigatório';
        if (!preRegister.cpf) _errors.cpf = 'esse campo é obrigatório';
        if (!preRegister.birthDate) _errors.birthDate = 'esse campo é obrigatório';
        if (!preRegister.password) _errors.password = 'esse campo é obrigatório';

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    const submitForm = () => {
    
        if (!isFormValid()) return;

        const birthDate = Moment(preRegister.birthDate, 'DD/MM/YYYY').format('MM/DD/YYYY');
        const preRegisterToSend = {
            ...preRegister,
            birthDate
        };

        postPreRegister(preRegisterToSend).then(response => {
            Alert.alert('Tudo certo :)', 'Registro realizado com sucesso, por favor confirme seu e-mail.');
            resetForm();
        }).catch(err => {
            Alert.alert('Algo de errado aconteceu :(', err.response?.data?.errorMessage);
            console.log(err);
        });
        
        console.log(preRegister);
    };

    const resetForm = () => {
        setPreRegister({
                    birthDate: '',
                    cpf: '',
                    email: '',
                    genre: '',
                    name: '',
                    password: '',
                    phone: '',
                    role: '' 
                });
    };

    return (
        <ScrollView>
            <ImageBackground 
                source={require('../../images/intro-page/intro-image.jpg')}
                resizeMode='cover'
                style={styles.image}
            >
                <LinearGradient colors={['rgba(77, 78, 77, 0.8)', 'rgba(194, 206, 199, .6)']} style={styles.linearGradient}>
                    
                    <KeyboardAvoidingView
                        behavior={"height"}
                       style={{width: '100%', alignItems: 'center', paddingTop: 70}}
                    >
                        <View style={styles.titlecontainer}>
                            <Text style={styles.maintitle}>
                                CADASTRAR
                            </Text>
                            <Text style={styles.subtitle}>
                                INSIRA OS DADOS PARA CONTINUAR
                            </Text>
                        </View>
                        <View style={styles.formcontainer}>
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"        
                                label="Nome"
                                onChangeText={name => setPreRegister({
                                    ...preRegister,
                                    name
                                })}
                                value={preRegister.name}
                                error={errors.name}
                            />
                            <HelperText type="error" visible={errors.name}>
                                {errors.name}
                            </HelperText>
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="E-mail"
                                 onChangeText={email => setPreRegister({
                                    ...preRegister,
                                    email
                                })}
                                error={errors.email}
                                value={preRegister.email}
                            />
                            <HelperText type="error" visible={errors.email}>
                                {errors.email}
                            </HelperText>
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="Celular"
                                error={errors.phone}
                                render={(props) => (
                                    <TextInputMask
                                        {...props}
                                        type={'cel-phone'}
                                        options={{
                                            maskType: 'BRL',
                                            withDDD: true,
                                            dddMask: '(99) '
                                        }}
                                        value={preRegister.phone}
                                        onChangeText={phone => {
                                            setPreRegister({
                                                ...preRegister,
                                                phone
                                            });
                                            props.onChangeText?.(phone);
                                        }}
                                    />
                                )

                                }
                            />
                            <HelperText type="error" visible={errors.phone}>
                                {errors.phone}
                            </HelperText>
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="CPF"
                                error={errors.cpf}
                                render={(props) => (
                                    <TextInputMask
                                        {...props}
                                        type={'cpf'}
                                        value={preRegister.cpf}
                                        onChangeText={cpf => {
                                            setPreRegister({
                                                ...preRegister,
                                                cpf
                                            });
                                            props.onChangeText?.(cpf);
                                        }}
                                    />
                                )
                                }
                            />
                            <HelperText type="error" visible={errors.cpf}>
                                {errors.cpf}
                            </HelperText>
                             <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="Data de Nascimento"
                                error={errors.birthDate}
                                render={(props) => (
                                    <TextInputMask
                                        {...props}
                                        type={'datetime'}
                                        options={{
                                            format: 'DD/MM/YYYY'
                                        }}
                                        value={preRegister.birthDate}
                                        onChangeText={birthDate => {
                                            setPreRegister({
                                                ...preRegister,
                                                birthDate
                                            });
                                            props.onChangeText?.(birthDate);
                                        }}
                                    />
                                )
                                }
                            />
                            <HelperText type="error" visible={errors.birthDate}>
                                {errors.birthDate}
                            </HelperText>
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="Senha"
                                onChangeText={password => setPreRegister({
                                    ...preRegister,
                                    password
                                })}
                                secureTextEntry={true}
                                error={errors.password}
                                value={preRegister.password}
                            />
                            <HelperText type="error" visible={errors.password}>
                                {errors.password}
                            </HelperText>

                            <View style={styles.radiogroup}>
                                <Text> Sexo </Text>
                                <View style={styles.radiobuttoncontainer}>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="M"
                                        status={ preRegister.genre === 'M' ? 'checked' : 'unchecked' }
                                        onPress={() => setPreRegister({
                                            ...preRegister,
                                            genre: 'M'
                                        })}
                                    />
                                    <Text style={styles.radiotext}>Masculino</Text>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="F"
                                        status={ preRegister.genre === 'F' ? 'checked' : 'unchecked' }
                                        onPress={() => setPreRegister({
                                            ...preRegister,
                                            genre: 'F'
                                        })}
                                    />
                                    <Text style={styles.radiotext}>Feminino</Text>
                                </View>
                                <HelperText type="error" visible={errors.genre}>
                                    {errors.genre}
                                </HelperText>
                            </View>

                            <View style={styles.radiogroup}>
                                <Text> Que tipo de usuário você é ? </Text>
                                <View style={styles.radiobuttoncontainer}>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="0"
                                        status={ preRegister.role === '0' ? 'checked' : 'unchecked' }
                                        onPress={() => setPreRegister({
                                            ...preRegister,
                                            role: '0'
                                        })}
                                    />
                                    <Text style={styles.radiotext}>Cliente</Text>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="1"
                                        status={ preRegister.role === '1' ? 'checked' : 'unchecked' }
                                        onPress={() => setPreRegister({
                                            ...preRegister,
                                            role: '1'
                                        })}
                                    />
                                    <Text style={styles.radiotext}>Profissional</Text>
                                </View>
                                <HelperText type="error" visible={errors.role}>
                                    {errors.role}
                                </HelperText>
                            </View>

                            <Button onPress={() => submitForm()} style={styles.button} mode='contained'>CADASTRAR</Button>
                        </View>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        marginTop: 30,
        justifyContent: 'center'
    },
    formcontainer: {
        width: '80%'
    },
    button: {
        marginTop: 20,
        marginBottom: 20
    },
    radiogroup: {
        marginTop: 15
    },
    radiotext: {
        display: 'flex',
        width: 120,
        color: '#000',
        fontWeight: '600',
        fontSize: 18
    },
    radiobuttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },  
    image: {
        height: '100%',
        width: '100%'
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titlecontainer: {
        marginLeft: -60
    },  
    maintitle: {
        fontSize: 36,
        color: '#fff',
        fontWeight: '600',
        opacity: 1
    },
    subtitle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
    }
});

export default RegisterPage;