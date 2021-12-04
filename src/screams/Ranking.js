import React from 'react';
import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';
// import home from '../components/styleHome';
import rankingMain from '../components/styleRankingMain';
import LinearGradient from 'react-native-linear-gradient';
import backgroundImg from '../imagens/backgroundHome.jpg';

const Ranking = ({navigation}) => {
  return (
    <View style={rankingMain.container}>
      <ImageBackground source={backgroundImg} style={rankingMain.image}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RankingAll');
          }}>
          <LinearGradient
            style={rankingMain.LinearGradient}
            colors={['#1e90ff', '#00bfff']}>
            <Text style={{fontSize: 20, color: '#FFF'}}>Ranking</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RankingPattern');
          }}>
          <LinearGradient
            style={rankingMain.LinearGradient}
            colors={['#1e90ff', '#00bfff']}>
            <Text style={{fontSize: 20, color: '#FFF'}}>Ranking</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Ranking;
