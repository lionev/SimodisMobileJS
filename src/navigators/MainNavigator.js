import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screams/Welcome';
import Login from '../screams/Login';
import Signup from '../screams/Cadastro';
import ListarProdutos from '../screams/ListarProdutos';
import Home from '../screams/Home';
import Perfil from '../screams/Perfil';
import Ranking from '../screams/Ranking';
import RankingAll from '../screams/RankingAll';
import RankingPattern from '../screams/RankingPattern';
import Questions from '../screams/Questions';
import ForgotPassword from '../screams/ForgotPassword';

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
    RankingAll: {
      screen: RankingAll,
    },
    RankingPattern: {
      screen: RankingPattern,
    },
    Questions: {
      screen: Questions,
    },
    ForgotPassword: {
      screen: ForgotPassword,
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
