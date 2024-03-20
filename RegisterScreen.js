import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o pacote de ícones FontAwesome

const RegisterScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContactSupport = () => {
    setModalVisible(true);
  };

  const handleCallWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=5585989304291');
  };

  const handleCallFixo = () => {
    Linking.openURL('tel:+5530224700');
  };

  const handleEmailSupport = () => {
    Linking.openURL('mailto:wmsolucoes_suporte@hotmail.com');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/5918293-pessoas-trabalhando-no-computador-com-cafe-ilustracao-escritorio-espaco-de-trabalho-plano-cartoon-estilo-adequado-para-web-landing-page-banner-flyer-sticker-wallpaper-card-background-vetor.jpg' }} style={styles.icon} />
      <Text style={styles.title}>Crie sua Conta</Text>
      <View style={styles.content}>
        <Text style={styles.instructions}>
          Para criar uma nova conta de usuário no servidor Midi, entre em contato com os gestores das sua empresa para iniciar o processo de registro. Estamos aqui para ajudá-lo em cada etapa.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleContactSupport}>
          <Text style={styles.buttonText}>Entrar em Contato com Suporte do Midi</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalItem} onPress={handleCallWhatsApp}>
              <Text style={styles.modalText}>
                <Icon name="whatsapp" size={20} color="#333" /> WhatsApp: 85 98930-4291
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={handleCallFixo}>
              <Text style={styles.modalText}>
                <Icon name="phone" size={20} color="#333" /> Fixo: 85 3022-4700
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={handleEmailSupport}>
              <Text style={styles.modalText}>
                <Icon name="envelope" size={20} color="#333" /> Email: wmsolucoes_suporte@hotmail.com
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  content: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  instructions: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
modalContainer:{
flex :1 ,
backgroundColor:'rgba(0,0,0,0.5)',
justifyContent:'center',
alignItems:'center'
},
modalContent:{
backgroundColor:'#fff',
padding :20 ,
borderRadius :10 ,
width :'80%',
alignItems:'center',
shadowColor:'#000',
shadowOffset:{
width :0 ,
height :2
},
shadowOpacity :0.25 ,
shadowRadius :3.84 ,
elevation :5
},
modalItem:{
padding :10 ,
borderBottomWidth :1 ,
borderBottomColor :'#ccc' ,
width :'100%'
},
modalText:{
fontSize :16 ,
color :'#333'
},
closeButton:{
marginTop :20 ,
backgroundColor :'#007bff' ,
padding :10 ,
borderRadius :5
},
closeButtonText:{
color :'#fff' ,
fontSize :16 ,
fontWeight :'bold'
}
});

export default RegisterScreen;