import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import home from '../components/styleHome';

const Home = ({navigation}) => {
  return (
    <View style={home.container}>
      <View style={home.semicirculoTop}></View>
      <View style={home.area}>
        <TouchableOpacity
          style={home.buttonHome}
          onPress={() => {
            navigation.navigate('ListarProdutos');
          }}>
          <Text style={{fontSize: 20, color: '#FFF'}}>Cursos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={home.buttonHome}
          onPress={() => {
            navigation.navigate('Ranking');
          }}>
          <Text style={{fontSize: 20, color: '#FFF'}}>Ranking</Text>
        </TouchableOpacity>
      </View>
      <View style={home.semicirculoBotton}></View>
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
