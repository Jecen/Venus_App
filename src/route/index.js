
import { StackNavigator } from 'react-navigation';
// views
import HomeScreen from '../views/home'
import UserScreen from '../views/user'

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  user: {
    screen: UserScreen
  }
});