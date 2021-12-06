import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../components/styleCadastro';
import {signup} from '../helpers/SimodisAPI';
import {doLogin} from '../helpers/AuthHandler';

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
        navigation.navigate('Home');
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
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 23,
            color: '#000',
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Cadastro Usuário
        </Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={t => setName(t)}
        />
      </View>
      <View style={{margin: 8}}>
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
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity style={styles.opacity} onPress={handleSignup}>
          <Text style={styles.text}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={handleLimpar}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen;
