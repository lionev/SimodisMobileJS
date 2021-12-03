import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import backgroundImg from '../imagens/teste1.png';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../components/styleWelcome';

const Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.image}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <LinearGradient
            colors={['#1e90ff', '#00bfff']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Acessar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

Screen.navigationOptions = () => {
  return {
    title: 'EDG Academy',
  };
};

export default Screen;
