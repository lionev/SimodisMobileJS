import {parse} from '@babel/core';
import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from '../components/stylesLogin';
import {signin} from '../helpers/SimodisAPI';
import {doLogin} from '../helpers/AuthHandler';

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
      <View>
        <Text style={styles.logo}>Simodis</Text>
      </View>
      <View>
        <TextInput
          placeholder="exemplo@dominio.com.br"
          style={styles.input}
          value={email}
          onChangeText={t => setEmail(t)}
        />
      </View>
      <View style={{margin: 8}}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={t => setPassword(t)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.opacity} onPress={handleFazerLogin}>
          <Text style={styles.text}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.opacity}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Screen.navigationOptions = () => {
  return {
    title: 'Login',
  };
};

export default Screen;

