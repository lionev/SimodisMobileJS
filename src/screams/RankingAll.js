import React from 'react';
import { SafeAreaView, View, FlatList,Text, } from 'react-native';

import ranking from '../components/styleRankings'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    position: '1',
    title: 'Matheus',
    score: '70'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    position: '2',
    title: 'Julio',
    score: '60'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    position: '3',
    title: 'Fernanda',
    score: '50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    position: '4',
    title: 'Jonatas',
    score: '40',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    position: '5',
    title: 'Natalia',
    score: '30',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    position: '6',
    title: 'Jhuly',
    score: '20',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    position: '7',
    title: 'Ivonaldo',
    score: '10',
  },

];

const Item = ({ title, score, position }) => (
  <View style={ranking.item}>
    <Text style={ranking.position}>{position}</Text>
    <Text style={ranking.title}>{title}</Text>
    <Text style={ranking.score}>{score}</Text>
  </View>
);

const RankingAll = ({ score = 2 }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} score={item.score} position={item.position} />
  );

  return (
    <SafeAreaView style={ranking.container}>
      <View style={ranking.content}>
        <View style={ranking.userRanking}>
          <Text style={ranking.text} >Sua posição é:</Text>
          <Text style={ranking.userScore}>{score}</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={ranking.list}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
RankingAll.navigationOptions = () => {
  return {
    title: 'Consultar cursos',
  };
};


export default RankingAll;