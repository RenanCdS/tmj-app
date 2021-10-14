import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const IntroPage = ({ navigation }) => {

    return (
        <View>
            <ImageBackground 
                source={require('../../images/intro-page/intro-image.jpg')}
                resizeMode='cover'
                style={styles.image}
            >
                <LinearGradient colors={['rgba(20, 130, 64, 0.8)', 'rgba(46, 227, 119, .4)']} style={styles.linearGradient}>
                    <View>
                        <Text style={styles.maintitle}>TMJ</Text>
                    </View>
                    <View style={styles.container}>
                        <Button style={styles.button} mode='outlined' onPress={() => navigation.navigate('RegisterPage')}>Registrar</Button>
                        <Button style={styles.button} mode='contained'>Entrar</Button>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        marginTop: 30,
        justifyContent: 'center'
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
    button: {
        width: '80%',
        padding: 10,
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        
    },
    maintitle: {
        fontSize: 64,
        color: '#fff',
        fontWeight: '600',
        opacity: 1
    }
});

export default IntroPage;