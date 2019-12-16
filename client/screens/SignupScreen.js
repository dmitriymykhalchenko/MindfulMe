import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  StatusBar
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

export default class SignupScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      header: null,
      // title: 'MindScreen',
      // headerStyle: {
      //   backgroundColor: '#f2f2f2',
      //   elevation: 0,
      //   borderBottomWidth: 0,
      // },
      // headerTintColor: 'black',
      // headerTitleStyle: {
      //   flex: 1,
      //   textAlign: 'center',
      // },
      // headerRight: <TouchableOpacity style={{height: 60, width: 60}} />,
      // tabBarOptions: {
      //   labelStyle: {
      //     fontSize: 12,
      //   },
      //   tabStyle: {
      //     width: 10,
      //   },
      //   style: {
      //     backgroundColor: 'green',
      //   },
      // },
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
      <SafeAreaView style={{flex: 1, width: w}}>
      <StatusBar backgroundColor="#302b63" barStyle="light-content" />
      <StatusBar hidden={false}/>

        <Image
          source={Icon.SIGNUP}
          style={{
            width: w,
            height: h,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            //  opacity: 0.12,
          }}
        />

        {/* section */}
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(13, 10, 39, 0.27)',
            'rgba(8, 6, 17, 0.91)',
          ]}
          style={{flex: 1}}>
          <View
            style={{
              paddingTop: isIphoneX() ? 391 : 361,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'SFUIText-Light',
                fontWeight: '300',
                fontSize: 16,
                color: '#ffffff',
              }}>
              Войти через
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              width: 295,
              height: 50,
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: '#1488cc',
              marginTop: 23,
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                this.props.navigation.navigate('EmailScreen');
              }}>
              <Text
                style={{
                  fontFamily: 'SFUIText-Light',
                  fontWeight: '300',
                  fontSize: 16,
                  textAlign: 'center',
                  color: '#ffffff',
                }}>
                Email
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{

            }}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: 295,
                height: 50,
                flexDirection: 'row',

                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#3c5a99',
                marginTop: 23,
              }}
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Image
                source={Icon.F}
                style={{
                  tintColor: '#ffffff',
                  alignSelf: 'center',
                  width: 10,
                  height: 20,
                }}
              />
              <Text
                style={{
                  fontFamily: 'SFUIText-Light',
                  fontWeight: '300',
                  alignSelf: 'center',
                  paddingLeft:14,
                  fontSize: 16,
                  textAlign: 'center',
                  color: '#ffffff',
                }}>
                Войти с помощью Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop:10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign:'center',
                fontFamily: 'SFUIText-Light',
                fontWeight: '300',
                fontSize: 12,
                color: '#ffffff',
              }}>
              Есть аккаунт?
            </Text>
            <Text
              style={{
                fontFamily: 'SFUIText-Light',
                fontWeight: '300',
                fontSize: 12,
                color: '#1488cc',
                paddingLeft:3,
                textDecorationLine:'underline'
              }}>
              Войти
            </Text>
          </View>
          <View style={{  position: 'absolute',
            left:'20%',
            bottom: 21,}}>
          <Text style={{
            fontFamily: 'SFUIText-Light',
            fontSize: 9,
            fontWeight: '300',
            textAlign:'center',
            color: '#ffffff',


          }}>
          Используя MindSelf, вы соглашаетесь с нашими <Text style={{textDecorationLine:'underline'}}>Условиями</Text></Text>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
