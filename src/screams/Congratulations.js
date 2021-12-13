import React from 'react';
import styles from '../components/styleCongratulations';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import backgroundImg from '../imagens/backgroundCongratulations.png';
import LinearGradient from 'react-native-linear-gradient';
const Congratulations = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundContent}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ListarProdutos');
            }}>
            <LinearGradient
              style={styles.LinearGradient}
              colors={['#F280BF', '#59130C']}>
              <Text style={{fontSize: 20, color: '#FFF'}}>
                Voltar para os cursos
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

Congratulations.navigationOptions = () => {
  return {
    title: 'Parabéns',
  };
};

export default Congratulations;
