import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, Alert  } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { postLogin } from '../services/auth.service';

const LoginPage = ({ navigation }) => {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const isFormValid = () => {
        let _errors = {};
        if (!loginInfo.email) _errors.email = 'esse campo é obrigatório';
        if (!loginInfo.password) _errors.password = 'esse campo é obrigatório';

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    };

    const submitForm = () => {
    
        if (!isFormValid()) return;

        postLogin(loginInfo).then(response => {
            Alert.alert('Logado com sucesso', 'Usuário logado com sucesso!');
            console.log(response);
            resetForm();
        }).catch(err => {
            Alert.alert('Algo de errado aconteceu :(', err.response?.data?.errorMessage);
            console.log(err);
        });
    };

    const resetForm = () => {
        setLoginInfo({
            email: '',
            password: ''
        });
    };

    return (
        <View>
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
                                ENTRAR
                            </Text>
                            <Text style={styles.subtitle}>
                                INSIRA OS DADOS PARA CONTINUAR
                            </Text>
                        </View>
                        <View style={styles.formcontainer}>
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"        
                                label="E-mail"
                                onChangeText={email => setLoginInfo({
                                    ...loginInfo,
                                    email
                                })}
                                value={loginInfo.email}
                                error={errors.email}
                            />
                            <HelperText type="error" visible={errors.email}>
                                {errors.email}
                            </HelperText>
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="Senha"
                                secureTextEntry={true}
                                onChangeText={password => setLoginInfo({
                                    ...loginInfo,
                                    password
                                })}
                                value={loginInfo.password}
                                error={errors.password}
                            />
                            <HelperText type="error" visible={errors.password}>
                                {errors.password}
                            </HelperText>
                            <Text style={styles.link} onPress={() => navigation.navigate('ForgottenPasswordPage')}>Esqueceu a senha ?</Text>
                            <Button style={styles.button} mode='contained' onPress={() => submitForm()}>ENTRAR</Button>
                        </View>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    formcontainer: {
        width: '80%'
    },
    link: {
        color: 'rgb(23, 41, 141)',
        textAlign: 'right',
        marginTop: 15,
        marginBottom: 10,
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

export default LoginPage;