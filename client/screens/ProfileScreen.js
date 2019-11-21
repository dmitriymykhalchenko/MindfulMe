import React from 'react';
import { Text, View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { h, w, isIphoneX } from '../../constants'

 export default class ProfileScreen extends React.Component {
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
           //backgroundColor: 'red',
         },
       },
     };
   };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}
