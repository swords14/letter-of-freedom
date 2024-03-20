import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/17556560-digite-a-senha-errada-esqueceu-uma-senha-smartphone-com-cara-feia-e-lanchonete-mostrando-a-senha-errada-do-texto-ilustracao-em-design-plano-vetor.jpg' }} style={styles.image} />
        <Text style={styles.title}>Recuperação de Senha</Text>
        <Text style={styles.instructions}>
          Para efetuar a redefinição da senha no sistema Midi, é necessário que solicite à gestão da sua empresa a alteração da senha, a qual será realizada diretamente no servidor do Midi pela equipe responsável.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    marginBottom: 200,
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;