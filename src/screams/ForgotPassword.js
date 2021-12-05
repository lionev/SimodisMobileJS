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

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contentText}>
          <Text style={styles.text}>Insira o seu email cadastrado: </Text>
        </View>
        <TextInput
          placeholder="Insira o seu email"
          style={styles.input}
          value={email}
          onChangeText={t => setEmail(t)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('TokenAndNewPassword')}>
          <LinearGradient
            style={styles.buttonNext}
            colors={['#1e90ff', '#00bfff']}>
            <Text style={styles.textButton}>Enviar Token</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;
