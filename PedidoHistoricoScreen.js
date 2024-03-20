// PedidoHistoricoScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button } from 'react-native';

const PedidoHistoricoScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState(null);

  const pedidos = [
    { id: 1, numero: '001', data: '10/03/2024', status: 'Entregue', itens: [{ nome: 'Item 1', quantidade: 2, valor: 50.00 }, { nome: 'Item 2', quantidade: 1, valor: 30.00 }], total: 100.00, cliente: 'Cliente A' },
    { id: 2, numero: '002', data: '12/03/2024', status: 'Pendente', itens: [{ nome: 'Item 3', quantidade: 1, valor: 25.50 }, { nome: 'Item 4', quantidade: 2, valor: 20.00 }], total: 75.50, cliente: 'Cliente B' },
    { id: 3, numero: '003', data: '15/03/2024', status: 'Entregue', itens: [{ nome: 'Item 5', quantidade: 3, valor: 40.25 }, { nome: 'Item 6', quantidade: 2, valor: 40.50 }], total: 120.75, cliente: 'Cliente C' },
  ];

  const handleDetalhesPedido = (pedido) => {
    setSelectedPedido(pedido);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Pedidos de Vendas</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.pedidoItem} onPress={() => handleDetalhesPedido(item)}>
            <Text style={styles.pedidoText}>Pedido #{item.numero} - {item.status}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes do Pedido #{selectedPedido?.numero}</Text>
            {/* Exibir informações detalhadas do pedido aqui */}
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pedidoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pedidoText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PedidoHistoricoScreen;