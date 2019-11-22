import React from 'react';
import { Text, View, SafeAreaView,TouchableOpacity,Image } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { h, w, isIphoneX } from '../../constants'
import Icon from '../styles/icon';


export default class SettingScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'Setting',
      headerStyle: {
        backgroundColor: '#f2f2f2',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <TouchableOpacity style={{height: 60, width: 60}} />,
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 10,
        },
        style: {
          backgroundColor: 'green',
        },
      },
    };
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(24,12,53)'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            margin: 5,
            backgroundColor: 'rgb(46,33,80)',
            position: 'absolute',
            //  top: 0 ,
            //left: 0,
            height: '10%', // висота
            width: '100%',
            bottom: 0,
          }}>
          <TouchableOpacity
            style={{
              width: '33%',
              height: '140%',
              backgroundColor: 'rgb(46,33,80)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Image
              source={Icon.HOMES}
              style={{width: 24, height: 24, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Home!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '33%',
              height: '140%',
              backgroundColor: 'rgb(46,33,80)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <Image
              source={Icon.USERHOME}
              style={{width: 24, height: 24, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '33%',
              height: '140%',
              backgroundColor: 'rgb(24,12,53)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Setting');
            }}>
            <Image
              source={Icon.FAVORITE}
              style={{width: 24, height: 24, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Setting</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
