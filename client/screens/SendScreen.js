import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

export default class SendScreen extends React.Component {
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

  // setTimeout( () => {
  //   // navigator action
  // }, 4000);
  render() {
    return (
      <SafeAreaView style={{flex: 1, width: w, backgroundColor: '#302b63'}}>
        <StatusBar backgroundColor="#302b63" barStyle="light-content" />
        <StatusBar hidden={false} />

        {/* section

          */}
        <LinearGradient
          colors={['#302b63', 'rgba(15, 12, 41, 0.98)']}
          style={{flex: 1}}>
          <View
            style={{
              paddingTop: isIphoneX() ? 275 : 245,
              alignItems: 'center',
            }}>
            <View style={{marginHorizontal: 50,justifyContent:'center'}}>
              <Text
                numberOflines={2}
                style={{
                  letterSpacing: 0.5,
                  lineHeight: 15,
                  fontFamily: 'SFUIText-Light',
                  fontWeight: '300',
                  fontSize: 16,
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                На указанный email отправлено
письмо со ссылкой на сброс пароля
              </Text>
            </View>
          </View>


          <View
            style={{
              borderRadius: 10,
              marginLeft: 40,
              marginRight: 40,
              width: 295,
              height: 50,
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: '#1488cc',
              marginTop: 40,
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                this.props.navigation.navigate('SignupScreen');
              }}>
              <Text
                style={{
                  fontFamily: 'SFUIText-Light',
                  fontWeight: '300',
                  fontSize: 16,
                  textAlign: 'center',
                  color: '#ffffff',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>

        </LinearGradient>
      </SafeAreaView>
    );
  }
}
