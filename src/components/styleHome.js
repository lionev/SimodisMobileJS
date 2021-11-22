import {StyleSheet} from 'react-native';

const Home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0ECFF',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  area: {
    width: 300,
    height: 500,
    marginLeft: 95,
    borderWidth: 4,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonHome: {
    backgroundColor: '#3485FF',
    height: 70,
    width: 220,
    marginTop: 1,
    margin: 35,
    padding: 9,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  semicirculoTop: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginTop: -110,
    marginBottom: 10,
    marginLeft: 390,
    backgroundColor: '#A1B2CD',
  },

  semicirculoBotton: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#A1B2CD',
    marginTop: 600,
    marginLeft: -500,
  },
});

export default Home;
