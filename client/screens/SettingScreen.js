import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';

export default class SettingScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'Settings',
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
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPass: true,
    };
  }

  toggleSwitch() {
    this.setState(
      {showPass: !this.state.showPass},
      // () => {
      //   this.props.navigation.setParams({ rightActionButton: () => this.renderElement() })///????
      // }
    );
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(24,12,53)'}}>
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            paddingLeft: 10,
          }}>
          <Text style={{color: 'white', fontSize: 18, padding: 10}}>
            Account Info
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontSize: 18, padding: 15}}>
              Animated Scenes
            </Text>
            <Switch
              style={{backgroundColor: 'transparent', color: 'red'}}
              onValueChange={this.toggleSwitch}
              value={this.state.showPass}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'white', fontSize: 18, padding: 15}}>
            Do Not Disturb
          </Text>
          <Switch
            style={{backgroundColor: 'transparent', color: 'red'}}
            onValueChange={this.toggleSwitch}
            value={this.state.showPass}
          />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'white', fontSize: 18, padding: 15}}>
            Reminder
          </Text>
          <Switch
            style={{backgroundColor: 'transparent', color: 'red'}}
            onValueChange={this.toggleSwitch}
            value={this.state.showPass}
          />
          </View>
          <Text style={{color: 'white', fontSize: 18, padding: 15}}>
            Help & Support
          </Text>
          <Text style={{color: 'white', fontSize: 18, padding: 15}}>About</Text>
          <Text style={{color: 'white', fontSize: 18, padding: 15}}>
            Log out
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
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
            <Text style={{color: 'white'}}>Settings</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
