import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import RegisterScreen from './RegisterScreen';
import WelcomeScreen from './WelcomeScreen'
import HomeScreen from './HomeScreen'
import ConfigurationsScreen from './ConfigurationsScreen'
import PedidoHistoricoScreen from './PedidoHistoricoScreen'
import PedidoVendaScreen from './PedidoVendaScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ConfigurationsScreen" component={ConfigurationsScreen} />
        <Stack.Screen name="PedidoHistoricoScreen" component={PedidoHistoricoScreen} />
        <Stack.Screen name="PedidoVendaScreen" component={PedidoVendaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;