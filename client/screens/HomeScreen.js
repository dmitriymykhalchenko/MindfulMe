import React from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        backgroundColor: 'black',

        tabStyle: {
          padding: 0,
          margin: 0,
          borderWidth: 2,
          borderColor: 'green', //Padding 0 here
        },
        style: {
          //backgroundColor: 'blue',
        },
        iconStyle: {
          //backgroundColor: 'black',
          //tintColor:'yellow',
          width: 50,
          height: 100,
          padding: 0, //Padding 0 here
        },
      },
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          margin:5,
          position: 'absolute',

          //  top: 0 ,
          //left: 0,
          height: '5%', // висота
          width: '65%',
          bottom: 0,
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '140%',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.props.navigation.navigate('AllProposalsScreen');
          }}>
          <Text>Home!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '140%',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.props.navigation.navigate('AllProposalsScreen');
          }}>
          <Text>Home!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '140%',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.props.navigation.navigate('AllProposalsScreen');
          }}>
          <Text>Home!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
