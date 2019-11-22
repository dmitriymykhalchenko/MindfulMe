// import React from 'react';
// import {Text, View} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import HomeScreen from './client/screens/HomeScreen';
// import SettingScreen from './client/screens/SettingScreen';
// import ProfileScreen from './client/screens/ProfileScreen';
// import {createStackNavigator} from 'react-navigation-stack';
//
// //import Icon from 'react-native-vector-icons/Ionicons'
// // const TabNavigator = createBottomTabNavigator({
// //   Home: {screen: HomeScreen},
// //   Profile: {screen: ProfileScreen},
// //   Setting: {screen: SettingScreen},
// //
// // });
//
// const RootStack = createStackNavigator(
//   {
//     Home: {screen: HomeScreen},
//     Profile: {screen: ProfileScreen},
//     Setting: {screen: SettingScreen},
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );
// const AppContainer = createAppContainer(RootStack);
//
// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
// //export default createAppContainer(TabNavigator);


import React from 'react';
import { Button, View, Text, FlatList, StyleSheet, ActivityIndicator, Image,TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './client/screens/HomeScreen';
import SettingScreen from './client/screens/SettingScreen';
import ProfileScreen from './client/screens/ProfileScreen';
// import {incrementCounter, decrementCounter} from './client/redux/actions';
// import {connect} from 'react-redux';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Setting:SettingScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondcontainer: {
    flex: 1,
    paddingTop: 20,
  },
  touch: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 220,
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    width: 100,
    textAlign: 'center',
  },
  detView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBig: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  active: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
