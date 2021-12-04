import {StyleSheet} from 'react-native';

const rankingMain = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#3485FF',
    height: 100,
    width: '80%',
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  LinearGradient: {
    width: 300,
    height: 80,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default rankingMain;
