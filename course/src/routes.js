import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen/index';
import ProfileScreen from './components/ProfileScreen/index';
import DetailScreen from './components/DetailScreen/index'

const Routes = createAppContainer(
createStackNavigator(
  {
    Home:{
      screen: HomeScreen
    },
    Profile:{
      screen:ProfileScreen
    },
    Detail:{
      screen:DetailScreen
    }
  },
  {
    initialRouteParams:'Home'
  }
)
);
export default Routes;
