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
import TokenAndNewPassword from '../screams/TokenAndNewPassword';
import Congratulations from '../screams/Congratulations';

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
    TokenAndNewPassword: {
      screen: TokenAndNewPassword,
    },
    Congratulations: {
      screen: Congratulations,
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
        textAlign: 'center',
        marginLeft: -60,
      },
      headerTintColor: 'black',
    },
  },
);

export default MainNavigator;
