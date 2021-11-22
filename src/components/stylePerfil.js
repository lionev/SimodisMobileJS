import {StyleSheet} from 'react-native';

const Perfil = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0ECFF',
    alignItems: 'center',
  },

  header: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginTop: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
  },

  body2: {
    width: 380,
    height: 350,
    backgroundColor: '#E0ECFF',
    marginTop: 30,
    borderWidth: 5,
    borderColor: '#FFF',
  },

  body1: {
    width: 380,
    height: 150,
    backgroundColor: '#E0ECFF',
    marginTop: 30,
    borderWidth: 5,
    borderColor: '#FFF',
  },
  picker: {
    marginTop: 10,
    marginHorizontal: 15,
    width: '90%',
    backgroundColor: 'red',
  },
  text1: {
    marginTop: 50,
    marginLeft: 130,
    fontSize: 30,
  },

  text: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Perfil;
