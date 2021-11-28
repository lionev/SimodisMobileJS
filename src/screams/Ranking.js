import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
// import home from '../components/styleHome';
import rankingMain from '../components/styleRankingMain';

const Ranking = ({navigation}) => {
  return (
    <View style={rankingMain.container}>
      <Text style={rankingMain.title}>Ranking</Text>
      <TouchableOpacity
        style={rankingMain.button}
        onPress={() => {
          navigation.navigate('RankingAll');
        }}>
        <Text style={rankingMain.text}>Ranking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={rankingMain.button}
        onPress={() => {
          navigation.navigate('RankingPattern');
        }}>
        <Text style={rankingMain.text}>Ranking Geral</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Ranking;
