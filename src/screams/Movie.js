import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../components/styleMovie';




const Screen = ({navigation}) => {

  
  
  const trailers = ["_cr3hQcMzQs", "ri_mzwlwZsA", 
  "7U_LsF13xs8", "H3K86BirOzE", 
  "4N9HwzQtv04", "ur0rw-SaFmU", 
  "e9J7QAt1XJc", "3OMjzghu_Jw",
  "qPWv_V1TQwE", "yzWWSKn_D14",
  "ATJYac_dORw", "-qq_6xqm1FU",
  "TOMVgWohAbU"];
  const INDEX = navigation.state.params.index;
  const handleClick = () => {
    
    navigation.navigate('Trailer', {
        url: trailers[INDEX]
    });
  }
  

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{navigation.state.params.titulo}</Text>
        <Image style={styles.img} source={{uri:navigation.state.params.avatar}}/>

        <TouchableOpacity onPress={handleClick} style={styles.opacity}>
            <Text style={{fontSize: 20, textAlign:'center', color:'#FFF'}}>Assistir Trailer</Text>
        </TouchableOpacity>

    </View>
  );
}

Screen.navigationOptions = () => {
  return {
      title:'Destaque'
  }
}

export default Screen;