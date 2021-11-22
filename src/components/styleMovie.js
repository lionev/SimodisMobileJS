import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:"#1E90FF",
        flexDirection:"column",
        alignItems:"center",
        
    },

    text:{
        fontSize: 30,
        color:"#FFF",
        fontWeight:"bold",
        marginTop:10,
        
    },

    img:{
        width: 300,
        height: 300,
    },

    opacity:{
        backgroundColor:"#5C9E07",
        height:55,
        width:150,
        marginTop:20,
        margin:35,
        marginBottom:1,
        padding:9,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
    }
});

  export default styles;