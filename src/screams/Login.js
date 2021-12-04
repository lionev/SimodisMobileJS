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
import LinearGradient from 'react-native-linear-gradient';

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
          <TouchableOpacity onPress={handleFazerLogin}>
            <LinearGradient
              style={styles.LinearGradient}
              colors={['#1e90ff', '#00bfff']}>
              <Text style={{fontSize: 20, color: '#FFF'}}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <LinearGradient
              style={styles.LinearGradient}
              colors={['#1e90ff', '#00bfff']}>
              <Text style={{fontSize: 20, color: '#FFF'}}>Cadastrar</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <LinearGradient
              style={styles.LinearGradient}
              colors={['#1e90ff', '#00bfff']}>
              <Text style={{fontSize: 20, color: '#FFF'}}>
                Esqueceu a senha?
              </Text>
            </LinearGradient>
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
