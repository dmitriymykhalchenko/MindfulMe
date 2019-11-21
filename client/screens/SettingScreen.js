import React from 'react';
import { Text, View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { h, w, isIphoneX } from '../../constants'


export default class SettingScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 10,
        },
        style: {
          //backgroundColor: 'green',
        },
      },
    };
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
