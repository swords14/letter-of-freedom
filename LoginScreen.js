// LoginScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [animation] = useState(new Animated.Value(0));
  const [firstLogin, setFirstLogin] = useState(true); // Estado para controlar o primeiro login

  useEffect(() => {
    // Verificar se é o primeiro login ao carregar a tela
    // Aqui você pode implementar a lógica para verificar se é o primeiro login
    // Exemplo: verificar se o usuário já fez login anteriormente e atualizar o estado firstLogin
  }, []);

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    if (firstLogin) {
      navigation.navigate('WelcomeScreen'); // Navegar para a tela de boas-vindas após o primeiro login
      setFirstLogin(false); // Atualizar o estado para indicar que não é mais o primeiro login
    }
  };
  const animatedStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image source={{ uri: 'https://i.imgur.com/lC3bySO.png' }} style={styles.image} />
          <View style={styles.formContainer}>
            <Text style={styles.title}></Text>
            <TextInput
              style={styles.input}
              placeholder="Login"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
            
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Não tem acesso?</Text>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.signupLink}>Registre-se</Text>
              </TouchableOpacity>
            </View>
            
            <Animated.View style={[styles.successMessage, animatedStyle]}>
              <Text style={styles.successMessageText}>Login Successful!</Text>
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff', // Fundo azul
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto branco
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f5f5f5',
    
  },
   button:{
     backgroundColor:'#fff', // Botão branco
     borderRadius :10,
     padding :15,
     width:'100%',
     alignItems:'center',
     marginBottom :10
   },
   buttonText:{
     color:'#007bff', // Texto azul
     fontSize :18,
     fontWeight :'bold'
   },
   forgotPassword:{
     color:'#fff', // Texto branco
     fontSize :16,
     textDecorationLine :'underline',
     marginBottom :25
   },
   signupContainer:{
     flexDirection :'row',
     alignItems :'center',
     marginTop :10
   },
   signupText:{
     fontSize :16,
     color:'#fff', // Texto branco
     marginRight :5
   },
   signupLink:{
     color:'#fff', // Texto branco
     fontSize :16,
     textDecorationLine :'underline'
   },
   successMessage:{
     marginTop :20
   },
   successMessageText:{
     color:'#4BB543'
   }
});

export default LoginScreen;