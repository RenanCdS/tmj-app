import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput, RadioButton, Button } from 'react-native-paper';

const RegisterPage = () => {

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
                            />
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="E-mail"
                            />
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="Celular"
                            />
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="CPF"
                            />
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="Data de nascimento"
                            />
                            <TextInput
                                style={{backgroundColor: 'transparent'}}
                                mode="flat"                   
                                label="Senha"
                            />

                            <View style={styles.radiogroup}>
                                <Text> Sexo </Text>
                                <View style={styles.radiobuttoncontainer}>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="masculino"
                                        status={ 'checked' }
                                    />
                                    <Text style={styles.radiotext}>Masculino</Text>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="feminino"
                                        status={ 'checked' }
                                    />
                                    <Text style={styles.radiotext}>Feminino</Text>
                                </View>
                            </View>

                            <View style={styles.radiogroup}>
                                <Text> Que tipo de usuário você é ? </Text>
                                <View style={styles.radiobuttoncontainer}>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="cliente"
                                        status={ 'checked' }
                                    />
                                    <Text style={styles.radiotext}>Cliente</Text>
                                    <RadioButton
                                        color='#3F51B5'
                                        value="feminino"
                                        status={ 'checked' }
                                    />
                                    <Text style={styles.radiotext}>Profissional</Text>
                                </View>
                            </View>

                            <Button style={styles.button} mode='contained'>CADASTRAR</Button>
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