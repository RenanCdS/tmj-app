import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroPage from './src/pages/IntroPage';
import RegisterPage from './src/pages/RegisterPage';

const Stack = createStackNavigator();

const App: () => Node = () => {

  return (
   <>
   <NavigationContainer>
      <Stack.Navigator
            initialRouteName='IntroPage'
            headerMode='screen'
      >
        <Stack.Screen
              name='IntroPage'
              component={IntroPage}
              options={{
                headerTitleAlign: 'center',
                headerShown: false
              }}
        />

        <Stack.Screen
              name='RegisterPage'
              component={RegisterPage}
              options={{
                headerTitleAlign: 'left',
                headerShown: true,
                headerTransparent: true,
                headerTitleStyle: {
                  fontSize: 200
                },
              }}
        />
      </Stack.Navigator>
   </NavigationContainer>
   </>
  );
};

const styles = StyleSheet.create({
    button: {
      padding: 0,
      marginLeft: -15,
      fontSize: 60
    }
})

export default App;
