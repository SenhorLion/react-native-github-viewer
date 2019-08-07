// import React from 'react';
// import { TouchableOpacity } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';

const MainAppStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: 'Search',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  // Login: LoginScreen,
  Main: MainAppStack
});

export default createAppContainer(AppNavigator);
