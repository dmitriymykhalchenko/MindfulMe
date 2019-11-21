import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './client/screens/HomeScreen';
import SettingScreen from './client/screens/SettingScreen';
import ProfileScreen from './client/screens/ProfileScreen';

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Setting: {screen: SettingScreen},

});

export default createAppContainer(TabNavigator);
