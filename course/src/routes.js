import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen/index';
import ProfileScreen from './pages/ProfileScreen/index';
import DetailScreen from './pages/DetailScreen/index';

const Routes = createAppContainer(
createStackNavigator(
  {
    Home:{
      screen: HomeScreen,
      navigationOptions:{
        headerStyle:{
          backgroundColor:'#f45111'
        },
        headerTintColor:'#fff'
      }
    },
    Profile:{
      screen:ProfileScreen,
      navigationOptions:{
        headerStyle:{
          backgroundColor:'#f45111'
        },
        headerTintColor:'#fff'
      }
    },
    Detail:{
      screen:DetailScreen,
      navigationOptions:{
        headerStyle:{
          backgroundColor:'#f45111'
        },
        headerTintColor:'#fff'
      }
    }
  },
  {
    initialRouteParams:'Home'
  }
)
);
export default Routes;
