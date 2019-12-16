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
  ScrollView
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

export default class CreateScreen extends React.Component {
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
      <SafeAreaView style={{flex: 1, width: w, backgroundColor: '#302b63',justifyContent: 'flex-end',}}>

        <StatusBar backgroundColor="#302b63" barStyle="light-content" />
        <StatusBar hidden={false} />

        <LinearGradient
          colors={['#302b63', 'rgba(15, 12, 41, 0.98)']}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={{
          //  flex: 1,justifyContent: 'flex-end',
          }}>

          <View
            style={{
              paddingTop: isIphoneX() ? 216 : 196,
              alignItems: 'center',
            }}>
            <View style={{marginHorizontal: '17%'}}>
              <Text
                numberOflines={1}
                style={{
                  letterSpacing: 0.5,
                  lineHeight: 15,
                  fontFamily: 'SFUIText-Light',
                  fontWeight: '300',
                  fontSize: 16,
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                Создайте учетную запись,чтобы сохранить Ваш прогресс
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 40,
              borderRadius: 10,
              backgroundColor: 'rgba(96,93,140,0.2)',
              marginTop: 45,
            }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#f9fafb"
              keyboardType="default"
              editable={true}
              style={{
                fontSize: 12,
                paddingLeft: 14,
                //textAlign: 'left',
                color: '#ffffff',
                fontFamily: 'SFUIText-Regular',
                backgroundColor: 'transparent',
                width: 295,
                height: 50,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 40,
              borderRadius: 10,
              backgroundColor: 'rgba(96,93,140,0.2)',
              marginTop: 12,
            }}>
            <TextInput
            secureTextEntry={true}
              placeholder="Пароль"
              placeholderTextColor="#f9fafb"
              keyboardType="default"
              editable={true}
              style={{
                fontSize: 12,
                paddingLeft: 14,
                //textAlign: 'left',
                color: '#ffffff',
                fontFamily: 'SFUIText-Regular',
                backgroundColor: 'transparent',
                width: 295,
                height: 50,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 40,
              borderRadius: 10,
              backgroundColor: 'rgba(96,93,140,0.2)',
              marginTop: 12,
            }}>
            <TextInput
              secureTextEntry={true}
              placeholder="Повторите пароль"
              placeholderTextColor="#f9fafb"
              keyboardType="default"
              editable={true}
              style={{
                fontSize: 12,
                paddingLeft: 14,
                //textAlign: 'left',
                color: '#ffffff',
                fontFamily: 'SFUIText-Regular',
                backgroundColor: 'transparent',
                width: 295,
                height: 50,
              }}
            />
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
                this.props.navigation.navigate('SendScreen');
              }}>
              <Text
                style={{
                  fontFamily: 'SFUIText-Light',
                  fontWeight: '300',
                  fontSize: 16,
                  textAlign: 'center',
                  color: '#ffffff',
                }}>
                Создать аккаунт
              </Text>
            </TouchableOpacity>
          </View>
<View>
          <View
            style={{
              paddingTop: 19,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                lineHeight:15,
                textAlign: 'center',
                fontFamily: 'SFUIText-Light',
                fontWeight: '300',
                fontSize: 12,
                color: '#ffffff',
                textAlign: 'center',
              }}>
              Есть аккаунт?
            </Text>
            <Text
              style={{
                fontFamily: 'SFUIText-Light',
                fontWeight: '300',
                fontSize: 12,
                color: '#1488cc',
                paddingLeft: 3,
                textDecorationLine: 'underline',
              }}>
              Войти
            </Text>
          </View>
          <View style={{marginTop:'22%',marginHorizontal:16,marginBottom:21}}>

          <Text
            style={{
              fontFamily: 'SFUIText-Light',
              fontSize: 9,
              //fontWeight: '300',
              textAlign: 'center',
              color: '#ababb6',
            }}>
            Используя MindSelf, вы соглашаетесь с нашими{' '}
            <Text style={{textDecorationLine: 'underline'}}>Условиями</Text>
          </Text>
          </View>
          </View>

          </ScrollView>
        </LinearGradient>

      </SafeAreaView>
    );
  }
}
