import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from '../components/styleCadastro';
import {signup} from '../helpers/SimodisAPI';
import {doLogin} from '../helpers/AuthHandler';
import backgroundImg from '../imagens/backgroundCadastro.png';
import LinearGradient from 'react-native-linear-gradient';

const Screen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (name !== '' && email !== '' && password !== '') {
      const json = await signup(name, email, password, false);
      if (json.error) {
        alert(JSON.stringify(json.error));
        return;
      } else {
        doLogin(json.token);
        navigation.navigate('Login');
      }

      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert('Informe os dados do usuário!');
    }
  };

  const handleLimpar = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.image}>
        <View style={styles.header}></View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput
            placeholder="Nome"
            style={{marginLeft: 10}}
            value={name}
            onChangeText={t => setName(t)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            style={{marginLeft: 10}}
            value={email}
            onChangeText={t => setEmail(t)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Senha"
            style={{marginLeft: 10}}
            value={password}
            onChangeText={t => setPassword(t)}
          />
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleSignup}>
          <LinearGradient
            style={styles.LinearGradient}
            colors={['#1e90ff', '#00bfff']}>
            <Text style={{fontSize: 20, color: '#FFF'}}>Cadastrar</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLimpar}>
          <LinearGradient
            style={styles.LinearGradient}
            colors={['#1e90ff', '#00bfff']}>
            <Text style={{fontSize: 20, color: '#FFF'}}>Voltar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
Screen.navigationOptions = () => {
  return {
    title: 'Cadastro',
  };
};

export default Screen;
