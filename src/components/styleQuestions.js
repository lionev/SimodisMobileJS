import {StyleSheet} from 'react-native';

const questions = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    marginTop: 30,
  },
  content: {
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    marginLeft: 20,
    marginTop: 30,
    height: '70%',
    justifyContent: 'center',
    backgroundColor: ' rgba(255, 255, 255, 0.8)',
  },
  header: {
    height: 150,
    width: '100%',
    marginBottom: 20,
  },
  questions: {
    fontSize: 13,
    marginHorizontal: 10,
    marginTop: -40,
    height: 200,
    borderRadius: 8,
  },
  textQuestions: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 20,
  },
  radiButton: {
    marginBottom: -20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 20,
    marginLeft: 50,
    marginTop: -30,
    color: 'black',
  },
  nextQuestion: {
    borderRadius: 8,
    width: '90%',
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  nextText: {
    color: 'white',
    fontSize: 20,
  },
  quest: {
    marginHorizontal: 20,
  },
  LinearGradient: {
    borderRadius: 8,
    width: '90%',
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export default questions;
