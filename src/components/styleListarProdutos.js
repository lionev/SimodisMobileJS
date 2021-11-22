import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex:1,        
        backgroundColor:"#E0ECFF",                             
        alignItems:"center",                   
    },

    area:{     
        alignItems:"center",
        flexGrow: 1,
        flexBasis: 0,                 
        marginTop:10,           
        width:380,
        height:500,                
        padding:10,
        backgroundColor:"#FFF",                        
    }, 
    
    areaCurso: {          
        marginRight: 10,
        marginLeft: 10,  
        marginBottom: 10,                      
        width:160,
        height:110,                   
        backgroundColor:"#E0ECFF",
        borderWidth:2,
        borderColor:"#CCC",
        borderTopColor:"#CCC",
        
    },

    input:{
        width:385,
        height:50,
        backgroundColor:"#FFFFFF",
        borderColor:"#CCC",
        borderWidth:2,
        borderTopColor:"#CCC",
        fontSize:15,
        fontWeight:"bold",
        color:"#000",
        padding:9,
        marginTop: 10,        
    },

    opacity:{
        
        backgroundColor:"#5C9E07",
        marginTop:20,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",

    },

    text:{
        fontSize:15,
        color:"#FFF",
        fontWeight:"bold",
        marginTop:-3,
    },
});

  export default styles;