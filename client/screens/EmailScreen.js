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

export default class EmailScreen extends React.Component {
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
        <StatusBar hidden={false} />

        {/* section

          */}
          <LinearGradient
         colors={[

           '#302b63',
           'rgba(15, 12, 41, 0.98)',
         ]}
         style={{flex: 1}}>
         <ScrollView>
        <View
          style={{
            paddingTop: isIphoneX() ? 212 : 182,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'SFUIText-Light',
              fontWeight: '300',
              fontSize: 16,
              color: '#ffffff',
            }}>
            Войти в свой аккаунт
          </Text>
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 40,
            marginTop: 1,
          }}>
          <Text
            style={{
              fontFamily: 'SFUIText-Light',
              fontSize: 12,
              fontWeight: '300',
              textAlign: 'center',
              color: '#ffffff',
            }}>
            Забыли пароль?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'SFUIText-Light',
                fontSize: 12,
                fontWeight: '300',
                textAlign: 'center',
                color: '#1488cc',
                textDecorationLine: 'underline',
              }}
              onPress={() => {
                this.props.navigation.navigate('DischangeScreen');
              }}
              >
              {' '}
              Нажмите здесь
            </Text>
          </TouchableOpacity>
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
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text
              style={{
                fontFamily: 'SFUIText-Light',
                fontWeight: '300',
                fontSize: 16,
                textAlign: 'center',
                color: '#ffffff',
              }}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{marginTop: 20, marginBottom: 19, justifyContent: 'center'}}>
          <Text
            style={{
              fontFamily: 'SFUIText-Light',
              fontSize: 14,
              fontWeight: '300',
              textAlign: 'center',
              color: '#ffffff',
            }}>
            Или
          </Text>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              width: 295,
              height: 50,
              flexDirection: 'row',

              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: '#3c5a99',
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
                paddingLeft: 14,
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
            paddingTop: 15,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'SFUIText-Light',
              fontWeight: '300',
              fontSize: 12,
              color: '#ffffff',
              textAlign: 'center',
            }}>
            Нужен аккаунт?
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
            Создать
          </Text>
        </View>
        <View style={{position: 'absolute', left: '20%', bottom: 21}}>
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
        </ScrollView>
        </LinearGradient>
        {/*//  */}
      </SafeAreaView>
    );
  }
}
