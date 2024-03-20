// PedidoVendaScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const PedidoVendaScreen = () => {
  const [cliente, setCliente] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleEnviarPedido = () => {
    // Implemente a lógica para enviar o pedido de venda com as informações preenchidas
    console.log('Pedido de venda enviado:', { cliente, produto, quantidade, observacao });
    // Adicione aqui a lógica para enviar o pedido, como uma chamada de API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Pedido de Venda</Text>
      <TextInput
        style={styles.input}
        placeholder="Cliente"
        value={cliente}
        onChangeText={setCliente}
      />
      <TextInput
        style={styles.input}
        placeholder="Produto"
        value={produto}
        onChangeText={setProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Observação"
        value={observacao}
        onChangeText={setObservacao}
        multiline
        numberOfLines={4}
      />
      <Button title="Enviar Pedido" onPress={handleEnviarPedido} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PedidoVendaScreen;