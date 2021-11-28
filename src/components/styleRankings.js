import { StyleSheet } from 'react-native'

const ranking = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        marginTop: 10,
    },
    userRanking:{
        color: 'blue',
        borderWidth: 1,
        borderColor: 'blue',
        width: '90%',
        borderTopEndRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomColor: 'black',
        padding: 10,
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: 25,
    },
    userScore: {
        color: 'white',
        fontSize: 25,
        marginLeft: 50,
    },
    item: {
        backgroundColor: '#3485FF',
        padding: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        borderRadius: 8,
    },
    list:{
        width: '90%',
        height: 100,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'blue',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    position:{
        fontSize: 20,
    },
    title: {
        fontSize: 20,
    },
    score: {
        fontSize: 20,
    },
  });
export default ranking;