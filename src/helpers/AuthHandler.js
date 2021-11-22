import AsyncStorage from '@react-native-community/async-storage';

export const doLogin = async token => {
  await AsyncStorage.setItem('token', token);
};

export const doLogout = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (err) {
    console.error(err);
  }
};

export const isLogged = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token ? true : false;
  } catch (err) {
    console.error(err);
  }
};

export const myToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};
