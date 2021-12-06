import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import backgroundImg from '../imagens/Val1.png';
import styles from '../components/styleTokenAndPassword';
import LinearGradient from 'react-native-linear-gradient';
import {altPassword} from '../helpers/SimodisAPI';

const TokenAndNewPassword = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');

  const handlePassword = async () => {
    if (token !== '' && newPassword !== '') {
      const json = await altPassword(token, newPassword);
      if (json.error) {
        alert(JSON.stringify(json.error));
        return;
      }
      navigation.navigate('Login');
    } else {
      alert('Token Invalido');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contentText}>
          <Text style={styles.text}>Insira o token e sua nova senha: </Text>
        </View>
        <TextInput
          placeholder="Insira o Token"
          style={styles.input}
          value={token}
          onChangeText={t => setToken(t)}
        />
        <TextInput
          placeholder="Insira a nova senha"
          style={styles.input1}
          value={newPassword}
          onChangeText={t => setNewPassword(t)}
        />
        <TouchableOpacity onPress={handlePassword}>
          <LinearGradient
            style={styles.buttonNext}
            colors={['#1e90ff', '#00bfff']}>
            <Text style={styles.textButton}>Trocar a senha </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default TokenAndNewPassword;
