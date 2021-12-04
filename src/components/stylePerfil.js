import {StyleSheet} from 'react-native';

const Perfil = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    width: 120,
    height: 120,
    marginBottom: -30,
  },
  iconImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
  },
  LinearGradientBody: {
    width: 380,
    height: 350,
    marginTop: 30,
    borderRadius: 8,
  },
  picker: {
    marginTop: 20,
    marginHorizontal: 15,
    width: '90%',
    backgroundColor: '#3485FF',
    borderRadius: 8,
  },
  text1: {
    marginTop: 50,
    marginLeft: 130,
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  nota: {
    marginTop: 40,
    marginLeft: 145,
  },
  notaText: {
    fontSize: 30,
  },
});

export default Perfil;
