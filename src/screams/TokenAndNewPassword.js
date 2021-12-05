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

const TokenAndNewPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
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
          placeholder="Insira o seu email"
          style={styles.input1}
          value={email}
          onChangeText={t => setEmail(t)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('TokenAndNewPassword')}>
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
