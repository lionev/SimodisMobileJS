import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../components/styleWelcome'



const Screen = ({navigation}) => {

    return(
        <View style={styles.container}>   
            <View style={styles.body}>
                    <View style={styles.efect}>
                        <Image 
                            style={styles.image}
                            source={require('../imagens/Saly-6.png')}
                            resizeMode="stretch"
                        />
                    </View>
                    
                <TouchableOpacity style={styles.button} onPress={()=> {navigation.navigate('Login')}}>
                    <Text style={{fontSize:25, color:"#FFF"}}>Next</Text>
                </TouchableOpacity>
                <View style={styles.semicirculoTop}></View>
                <View style={styles.semicirculoBotton}></View>
            </View>                
        </View>
    );
}
    
Screen.navigationOptions = () => {
    return {
        title:'Welcome To Simodis'
    }
}

export default Screen;