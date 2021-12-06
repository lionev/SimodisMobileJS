import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 350,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f8f8ff',
    borderColor: 'black',
    borderWidth: 0.8,
    marginTop: -20,
    marginHorizontal: 20,
  },
  contentText: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  buttonNext: {
    width: 350,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 5,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
});

export default styles;
