import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView  } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const ForgottenPasswordPage = () => {

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
                                TROCA DE SENHA
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
                            />
                            <Button style={styles.button} mode='contained'>ENVIAR</Button>
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
        fontSize: 30,
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

export default ForgottenPasswordPage;