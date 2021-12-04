import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  ImageBackground,
} from 'react-native';
import home from '../components/styleHome';
import backgroundImg from '../imagens/backgroundHome.jpg';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <View style={home.container}>
      <ImageBackground source={backgroundImg} style={home.image}>
        <View style={home.area}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ListarProdutos');
            }}>
            <LinearGradient
              style={home.LinearGradient}
              colors={['#1e90ff', '#00bfff']}>
              <Text style={{fontSize: 20, color: '#FFF'}}>Cursos</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Ranking');
            }}>
            <LinearGradient
              style={home.LinearGradient}
              colors={['#1e90ff', '#00bfff']}>
              <Text style={{fontSize: 20, color: '#FFF'}}>Ranking</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Questions');
            }}>
            <LinearGradient
              style={home.LinearGradient}
              colors={['#1e90ff', '#00bfff']}>
              <Text style={{fontSize: 20, color: '#FFF'}}>Atividades</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

Home.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
    ),
  };
};

export default Home;
