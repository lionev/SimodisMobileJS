import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },

  content: {
    width: 350,
    marginLeft: -60,
    marginTop: -60,
    padding: 30,
    justifyContent: 'center',
  },
  input: {
    width: 350,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
  },
  button: {
    alignItems: 'center',
    marginTop: -20,
  },
  LinearGradient: {
    width: 350,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
});

export default styles;
