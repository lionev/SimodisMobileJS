import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screams/Welcome';
import Login from '../screams/Login';
import Signup from '../screams/Cadastro';
import ListarProdutos from '../screams/ListarProdutos';
import Home from '../screams/Home';
import Perfil from '../screams/Perfil';
import Ranking from '../screams/Ranking';

const MainNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    ListarProdutos: {
      screen: ListarProdutos,
    },
    Home: {
      screen: Home,
    },
    Perfil: {
      screen: Perfil,
    },
    Ranking: {
      screen: Ranking,
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: ' ',
      headerStyle: {
        height: 50,
      },
      headerTitleStyle: {
        fontSize: 25,
        color: 'black',
      },
      headerTintColor: 'black',
    },
  },
);

export default MainNavigator;
