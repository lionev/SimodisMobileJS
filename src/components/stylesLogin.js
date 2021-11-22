import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex:1,        
        backgroundColor:"#E0ECFF",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        flexWrap:"wrap",
    },

    input:{
        width:370,
        height:45,
        backgroundColor:"#FFFFFF",
        borderRadius:5,
        borderColor:"#CCCCCC",
        borderWidth:1,
        borderTopColor:"#CCCCCC",
        fontSize:15,
        fontWeight:"bold",
        color:"#000",
        padding:9,
    },

    logo:{
        fontSize:35,
        textAlign:"center",
        marginBottom:40,
        fontWeight:"bold"
    },

    opacity:{        
        backgroundColor:"#3485FF",
        height:40,
        width:150,
        marginTop:1,
        margin:35,
        marginBottom:-60,
        padding:9,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        flexWrap: "wrap"

    },

    text:{
        fontSize:15,
        color:"#FFF",        
        marginTop:-3,
        marginLeft: 80
    }
});

  export default styles;