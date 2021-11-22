import React, { useState, useCallback, useRef} from 'react';
import { Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import styles from '../components/styleTrailer';
import YoutubePlayer from "react-native-youtube-iframe";




const Screen = ({navigation}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
    setPlaying(false);
    Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  

  const handleClick = () => {
    navigation.navigate('ListarProdutos');
  }
  
  const URL = navigation.state.params.url;

  return (
    <View style={styles.container}>
        <View style={{width: 410, height: 310, marginTop: 20, alignItems:'center'}}>
            <YoutubePlayer
                height={290}
                width={400}
                play={playing}
                videoId={URL}
                onChangeState={onStateChange}
            />
            
            <TouchableOpacity onPress={togglePlaying} style={styles.play}>
              <Text style={{fontSize:20, color:"#FFF", fontWeight:"bold"}}>{playing ? "pause" : "play"}</Text>
            </TouchableOpacity>
        </View>
        
        <Text style={{fontSize: 25, color:"#FFF", marginTop: 35, marginBottom: 10}}>Listagem de filmes: </Text>
        
        <TouchableOpacity onPress={handleClick} style={styles.opacity}>
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>

    </View>
  );
}

Screen.navigationOptions = () => {
  return {
      title:'Trailer'
  }
}

export default Screen;