
import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';

export default class PlayerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
  //title: 'Player',
  header: null,
  tabBarComponent: () => null,
  headerBackTitleVisible: false,
  headerMode: 'none',
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: 'white'
  },
  headerTintColor: 'green',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  height: h
});
  //static navigationOptions = ({navigation, navigationOptions}) => {
    // return {
    //   title: 'Player',
    //    headerLeft: null,
    //   // headerRight: (
    //   //   <TouchableOpacity
    //   //     onPress={() => navigation.navigate('Setting')}
    //   //     style={{
    //   //       marginRight: 20,
    //   //       paddingLeft: 20,
    //   //       alignSelf: 'center',
    //   //       justifyContent: 'center',
    //   //     }}>
    //   //     <Image source={Icon.SETTINGS} style={{width: 25, height: 25}} />
    //   //   </TouchableOpacity>
    //   // ),
    //
    //   // tabBarOptions: {
    //   //   labelStyle: {
    //   //     fontSize: 12,
    //   //   },
    //   //   tabStyle: {
    //   //     width: 10,
    //   //   },
    //   //   style: {
    //   //     //backgroundColor: 'red',
    //   //   },
    //   // },
    // };
  //};
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{ marginTop: 30,width:'100%', flex: 1 / 5,backgroundColor: 'transparent', alignItems: 'space-around',justifyContent:'center',flexDirection:'row'}}>
          <TouchableOpacity
          style = {{backgroundColor:'transparent',marginLeft:'15%',justifyContent:'center',alignSelf:'center'}}>
          <Image
            source={Icon.USERPROFILE}
            style={{
              width: 130,
              height: 130,
              tintColor: 'gray',
              backgroundColor: 'lightgray',
              borderRadius: 75,
              borderWidth: 25,
              borderColor: 'lightgray',
            }}
          />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={{
              margin: 30,
              alignSelf: 'flex-start',
              justifyContent: 'center',
              backgroundColor:"transparent"
            }}>
            <Image
              source={Icon.DOWNLOAD}
              style={{width: 20, height: 20, tintColor: 'black',alignItems:"flex-end",}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop:10,
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black',justifyContent:'center',alignSelf:'center', fontWeight: '700', fontSize: 14}}>
            Full Name
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
              backgroundColor: 'rgb(46,33,80)',
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
