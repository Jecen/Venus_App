
import { StackNavigator, SwitchNavigator } from 'react-navigation';
// app views
import HomeScreen from '../views/home';
import UserScreen from '../views/user';

// login & register views
import LoginScreen from '../views/login';

// tools views
import AuthLoadingScreen from '../views/tools/AuthLoadingScreen';

const AppStack = StackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
const AuthStack = StackNavigator({ login: LoginScreen }, { mode: 'modal', headerMode: 'none' });

export default SwitchNavigator({
  App: AppStack,
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
});
