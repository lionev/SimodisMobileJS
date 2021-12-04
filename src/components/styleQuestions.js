import {StyleSheet} from 'react-native';

const question = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33BEFF',
  },
  content: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999C9E',
  },
  header: {
    height: 150,
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: 'red',
    marginLeft: 10,
    marginTop: -60,
  },
  questions: {
    color: 'blue',
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
  radiButton: {
    marginTop: -50,
    marginBottom: -50,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 250,
  },
  ButtonText: {
    fontSize: 15,
  },
  nextQuestion: {
    borderRadius: 8,
    backgroundColor: 'blue',
    width: '90%',
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    color: 'white',
    fontSize: 20,
  },
});

export default question;
