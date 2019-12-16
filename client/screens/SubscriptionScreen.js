import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

export default class SubscriptionScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {

     header: null,
      headerStyle: {
        backgroundColor: '#302b63',
        elevation: 0,
        borderBottomWidth: 0,
      },
       headerLeft: null,
      headerBackTitle: null,
      headerTruncatedBackTitle: false,
      //headerBackTitleVisible:false,
      //header: null,
      //title: 'Подписка',

      headerTintColor: 'red',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <TouchableOpacity style={{height: 60, width: 60}} />,
      tabBarOptions: {
        labelStyle: {
          fontSize: 16,
        },
        // tabStyle: {
        //   width: 100,
        // },
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
      <SafeAreaView style={{flex: 1, width: w,backgroundColor: 'rgba(41, 37, 87, 1)'}}>
        {/*<StatusBar hidden={false}/>
        <StatusBar backgroundColor="red" barStyle="dark-content" />*/}
<StatusBar backgroundColor="red" barStyle="light-content" />
        {/* section */}
        <LinearGradient
          colors={[
            'rgba(41, 37, 87, 1)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(20, 20, 52, 0.98)',
            'rgba(15, 12, 41, 0.98)',
          ]}
          style={{flex: 1}}>
          <View
            style={{
              //paddingLeft: 15,
              marginTop: 13,
              //paddingBottom: 31,
              flexDirection: 'row',
              //width: '85%',
              //  alignItems: 'stretch',
              // alignSelf:'stretch',
              justifyContent: 'space-between',
              //justifyContent:'center'
            }}>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              style={{
                //  width: 12, height: 7.4,
                //paddingRight: '25%',
                justifyContent: 'flex-start',
              }}
              onPress={() => {
                this.props.navigation.goBack(null);
              }}>
              <Image
                source={Icon.BACK}
                style={{
                  tintColor: '#ffffff',
                  alignSelf: 'center',
                  marginLeft: 15,
                }}
              />
            </TouchableOpacity>
            <View style={{backgroundColor: 'transparent', marginRight: '40%'}}>
              <Text
                style={{
                  //width: '80%',
                  fontSize: 16,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'center',
                  // width: 209,
                  // height: 18,
                }}>
                Подписка
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 24,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#ffffff',
                fontFamily: 'SFUIText-Regular',
                textAlign: 'center',
              }}>
              COMING SOON
            </Text>
          </View>
          <View
            style={{
              marginLeft: 47,
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={Icon.CHECKSUB}
              style={{
                tintColor: '#1488cc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <View style={{backgroundColor: 'transparent', paddingLeft: 14}}>
              <Text
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'center',
                }}>
                4 ПОЛНЫХ КУРСА УПРАВЛЯЕМЫХ МЕДИТАЦИЙ
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 47,
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={Icon.CHECKSUB}
              style={{
                tintColor: '#1488cc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <View style={{backgroundColor: 'transparent', paddingLeft: 14}}>
              <Text
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'center',
                }}>
                КОУЧ-СЕССИИ
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 47,
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={Icon.CHECKSUB}
              style={{
                tintColor: '#1488cc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <View
              style={{
                backgroundColor: 'transparent',
                paddingLeft: 14,
                marginRight: '24%',
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'SFUIText-Regular',
                  lineHeight: 20,
                  //textAlign: 'center',
                }}>
                ДОПОЛНИТЕЛЬНОЕ КОЛИЧЕСТВО ФОНОВОЙ МУЗЫКИ И ОБОЕВ ДЛЯ
                САМОСТОЯТЕЛЬНЫХ И ГАЙДИРОВАННЫХ МЕДИТАЦИЙ
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 25,
            }}>
            <View
              style={{
                width: 133,
                height: 133,
                backgroundColor: 'rgba(84, 71, 209, 0.21)',
                borderRadius: 10,
                marginRight: 12,
              }}>
              <Text
                style={{
                  paddingTop: 10,
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.83)',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 10,
                }}>
                ЧАСТНАЯ
              </Text>
              <Text
                style={{
                  paddingTop: 27,
                  textAlign: 'center',
                  color: 'rgb(255,255,255)',
                  fontFamily: 'SFUIText-Semibold',
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                $ 0.99/месяц
              </Text>
              <Text
                style={{
                  paddingTop: 27,
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 10,
                }}>
                Оплата раз в месяц
              </Text>
            </View>
            <View
              style={{
                width: 133,
                height: 133,
                backgroundColor: 'rgba(84, 71, 209, 0.21)',
                borderRadius: 10,
                marginRight: 12,
              }}>
              <Text
                style={{
                  paddingTop: 10,
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.83)',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 10,
                }}>
                КОРПОРАТИВНАЯ
              </Text>
              <Text
                style={{
                  paddingTop: 27,
                  textAlign: 'center',
                  color: 'rgb(255,255,255)',
                  fontFamily: 'SFUIText-Semibold',
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                $ 9/год
              </Text>
              <Text
                style={{
                  paddingTop: 7,
                  textAlign: 'center',
                  color: 'rgba(249,250,251,0.9)',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 10,
                }}>
                COMING SOON
              </Text>
              <Text
                style={{
                  paddingTop: 7,
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 10,
                }}>
                Оплата раз в год
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 275,
              height: 57,
              backgroundColor: 'rgba(84, 71, 209, 0.21)',
              borderRadius: 10,
              //marginRight: 12,
              marginTop:15,
              //justifyContent:'center',
              alignSelf:'center'
            }}>
            <Text
              style={{
                paddingTop: 10,
                textAlign: 'center',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'SFUIText-Regular',
                fontSize: 10,
              }}>
              ПОДАРОЧНАЯ ПОДПИСКА
            </Text>
            <Text
              style={{
                paddingTop: 10,
                textAlign: 'center',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'SFUIText-Regular',
                fontSize: 10,
              }}>
              Частная подписка по промокоду (на 1 месяц)
            </Text>

          </View>


          <View
            style={{
              width: 295,
              height: 50,
              backgroundColor: 'rgba(20, 136, 204, 0.3)',
              borderRadius: 10,
              //marginRight: 12,
              marginTop:31,
              //justifyContent:'center',
              alignSelf:'center'
            }}>
            <Text
              style={{
                paddingTop: 10,
                textAlign: 'center',
                justifyContent:'center',
                // marginTop:16,
                // marginBottom:15,
                color: 'rgba(255,255,255,0.3)',
                fontFamily: 'SFUIText-Regular',
                fontSize: 16,
              }}>
              Подписаться
            </Text>
          </View>
<View style={{  position: 'absolute',
//left: 15,
bottom: 15,
//fontSize: 12,
marginLeft:30,marginRight:30,marginTop:31}}>
<Text style={{fontFamily:'SFUIText-Light',textAlign:'center',fontWeight:'300',color:'#ffffff',fontSize:9}}>
Оплата списывается  с Вашего iTunes аккаунта. Управлять подписками и отключить автоматическое продление в Настройках Учетной записи. <Text style={{textDecorationLine: 'underline'}}>Условия</Text> и <Text style={{textDecorationLine: 'underline'}}>Положения</Text> MindSelf</Text>
</View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
