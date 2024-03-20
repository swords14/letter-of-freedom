// ConfiguracaoScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ConfiguracaoScreen = () => {
  const handleNotifications = () => {
    // Implemente a lógica para gerenciar as configurações de notificações
  };

  const handleAboutApp = () => {
    // Implemente a lógica para exibir informações sobre o aplicativo
  };

  const handleFeedback = () => {
    // Implemente a lógica para fornecer feedback sobre o aplicativo
  };

  const handlePrivacySecurity = () => {
    // Implemente a lógica para configurar as opções de privacidade e segurança
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações do App</Text>
      
      <TouchableOpacity style={styles.optionButton} onPress={handleNotifications}>
        <Text style={styles.optionText}>Notificações</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionButton} onPress={handleAboutApp}>
        <Text style={styles.optionText}>Sobre o Aplicativo</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionButton} onPress={handleFeedback}>
        <Text style={styles.optionText}>Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handlePrivacySecurity}>
        <Text style={styles.optionText}>Privacidade e Segurança</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Fundo cinza claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#007bff', // Botão azul
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
  },
  optionText: {
    color: '#fff', // Texto branco nos botões azuis
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ConfiguracaoScreen;