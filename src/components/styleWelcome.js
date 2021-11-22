import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0ECFF',
  },

  body: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: '97%',
    alignItems: 'center',
  },

  texto: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
  },

  image: {
    height: '130%',
    width: '120%',
    marginTop: -40,
    marginLeft: 35,
    alignItems: 'center',
    alignContent: 'center',
  },

  button: {
    marginTop: '30%',
    marginRight: -290,
    height: 40,
    width: 100,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3485FF',
  },

  efect: {
    marginTop: '20%',
    marginLeft: -140,
    height: '60%',
    width: '90%',
    borderRadius: 180,
    backgroundColor: '#3485FF',
  },

  semicirculoTop: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginTop: -640,
    marginLeft: 360,
    backgroundColor: '#A1B2CD',
  },

  semicirculoBotton: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#A1B2CD',
    marginTop: 480,
    marginLeft: -350,
  },
});

export default styles;
