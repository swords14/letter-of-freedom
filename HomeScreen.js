// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const handlePedidoVenda = () => {
    navigation.navigate('PedidoVendaScreen'); // Navegar para a tela de fazer pedido de venda
  };

  const handleHistoricoPedidos = () => {
    navigation.navigate('PedidoHistoricoScreen'); // Navegar para a tela de histórico de pedidos
  };

  const handleConfiguracoes = () => {
    navigation.navigate('ConfigurationsScreen'); // Navegar para a tela de configurações ao tocar na engrenagem
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/xpaUvwq.png' }} style={styles.image} />
      <Text style={styles.appName}>Midi Pda</Text>
      <TouchableOpacity style={styles.configButton} onPress={handleConfiguracoes}>
        <Ionicons name="settings" size={24} color="#fff" /> {/* Engrenagem branca */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPrimary} onPress={handlePedidoVenda}>
        <Text style={styles.buttonText}>Fazer Pedido de Venda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={handleHistoricoPedidos}>
        <Text style={styles.buttonText}>Histórico de Pedidos de Vendas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', // Fundo azul
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto branco
  },
  configButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  buttonPrimary: {
    backgroundColor: '#fff', // Botão branco
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  buttonSecondary: {
    backgroundColor: '#fff', // Botão branco
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#007bff', // Texto azul nos botões brancos
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;