import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import backgroundImg from '../imagens/Val1.png';
import styles from '../components/styleForgotPassword';
import LinearGradient from 'react-native-linear-gradient';
import {getTokenPassword} from '../helpers/SimodisAPI';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleRecover = async () => {
    if (email !== '') {
      const json = await getTokenPassword(email);
      if (json.error) {
        alert(JSON.stringify(json.error));
        return;
      }
      navigation.navigate('TokenAndNewPassword');
    } else {
      alert('Email Invalido');
    }
  };

  return (
    <ImageBackground
      source={backgroundImg}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.contentText}>
          <Text style={styles.text}>Insira o seu email cadastrado: </Text>
        </View>
        <TextInput
          placeholder="Insira o email"
          style={styles.input}
          value={email}
          onChangeText={t => setEmail(t)}
        />
        <TouchableOpacity onPress={handleRecover}>
          <LinearGradient
            style={styles.buttonNext}
            colors={['#1e90ff', '#00bfff']}>
            <Text style={styles.textButton}>Enviar Token</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

ForgotPassword.navigationOptions = () => {
  return {
    title: 'Recuperar Senha',
  };
};

export default ForgotPassword;
