import {parse} from '@babel/core';
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../components/stylesLogin';
import {signin} from '../helpers/SimodisAPI';
import {doLogin} from '../helpers/AuthHandler';
import backgroundImg from '../imagens/background.jpg';

const image = {uri: 'https://reactjs.org/logo-og.png'};

const Screen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFazerLogin = async () => {
    if (email !== '' && password !== '') {
      const json = await signin(email, password);
      if (json.token) {
        doLogin(json.token);
        navigation.navigate('Home');
      } else {
        alert('Email ou senha inválidos!');
      }
    } else {
      alert('Informe os dados do usuário!');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <View style={styles.title}>
            <Text style={styles.name}>EDG{'\n'}Academy</Text>
          </View>

          <TextInput
            placeholder="exemplo@dominio.com.br"
            style={styles.input}
            value={email}
            onChangeText={t => setEmail(t)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={t => setPassword(t)}
          />
        </View>
        <View style={styles.containerOpacity}>
          <TouchableOpacity style={styles.opacity} onPress={handleFazerLogin}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.text}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.text}>Problemas com o login?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

Screen.navigationOptions = () => {
  return {
    title: 'Login',
  };
};

export default Screen;
