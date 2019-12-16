import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity,ScrollView ,Image,Switch} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

// const IMAGE_HEIGHT = (h
//   - (isIphoneX() ? 74 : 44)
//   - (isIphoneX() ? 70 : 50)
//   ) / 3 - (19 + 25 + 13)
//
// const IMAGE_WIDTH = IMAGE_HEIGHT / 133 * 154;
export default class ProfileComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      header: null,
      // title: 'Profile',
      // headerRight: (
      //   <TouchableOpacity
      //     onPress={() => navigation.navigate('Setting')}
      //     style={{
      //       marginRight: 20,
      //       paddingLeft: 20,
      //       alignSelf: 'center',
      //       justifyContent: 'center',
      //     }}>
      //     <Image source={Icon.SETTINGS} style={{width: 25, height: 25}} />
      //   </TouchableOpacity>
      // ),
      // tabBarOptions: {
      //   labelStyle: {
      //     fontSize: 12,
      //   },
      //   tabStyle: {
      //     width: 10,
      //   },
      //   style: {
      //     //backgroundColor: 'red',
      //   },
      // },
    };
  };
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPass: false,
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
    const {navigation} = this.props;
    return (
      <ScrollView style={{flex: 1, }}>
        <LinearGradient
          colors={[
            '#302b63',
            'rgba(41, 37, 87, 1)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(20, 20, 52, 0.98)',
            'rgba(15, 12, 41, 0.98)',
          ]}
          style={{flex: 1}}>
          {/* section */}
          <View
            style={{
              paddingTop: isIphoneX() ? 63 : 33,
              //marginTop: 33,
              //marginBottom: 50,
              //flex: 1,
              //marginBottom:40,
              //  backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Text
                style={{fontSize: 16,fontFamily:'SFUIText-Regular', textAlign: 'center', color: '#ffffff'}}>
                Профиль
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  marginBottom:15,
                  width: 96,
                  height: 96,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 75,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
                onPress={() =>
                  this.props.navigation.navigate('', {
                    //  dataSource: item,
                  })
                }>
                <Image
                  source={Icon.USERPROFILE}
                  style={{
                    alignItems:'center',
                    justifyContent:'center',
                     width: 38,
                     height: 42,
                     //backgroundColor: 'rgba(0,0,0,0.49)',

                  }}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>Елена</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'transparent',
              // width: '100%',
              marginTop:21,
              // flex:1,
            }}>
            <View style={{alignItems: 'center',flex:1, justifyContent: 'space-between'}}>
              <Text
                numberOfLines={3}
                style={{
                  color: '#ffffff',
                  //width: 70,
                  fontFamily:'SFUIText-Light',
                  fontSize: 12,
                  textAlign: 'center'
                }}>
                Общее время медитаций
              </Text>
              <Text
                numberOfLines={2}
                style={{marginTop: 11,fontSize:24,fontFamily:'SFUIText-Regular',
                   color: '#ffffff', textAlign: 'center'}}>
                60
              </Text>
            </View>
            <View style={{alignItems: 'center',flex:1, justifyContent: 'space-between'}}>
              <Text numberOfLines={2} style={{color: '#ffffff', fontFamily:'SFUIText-Light',
              fontSize: 12, textAlign: 'center'}}>
                Количество сессий
              </Text>
              <Text
                numberOfLines={2}
                style={{marginTop: 25,marginTop: 29, color: '#ffffff',fontSize:24,fontFamily:'SFUIText-Regular', textAlign: 'center'}}>
                10
              </Text>
            </View>
            <View style={{alignItems: 'center',flex:1, justifyContent: 'space-between'}}>
              <Text
                numberOfLines={3}
                style={{
                  color: '#ffffff',
                  fontFamily:'SFUIText-Light',
                  fontSize: 12,
                  textAlign: 'center'
                }}>
                Количество ежедневных медитаций
              </Text>
              <Text
                numberOfLines={2}
                style={{marginTop: 10, color: '#ffffff',fontSize:24,fontFamily:'SFUIText-Regular',textAlign: 'center'}}>
                5
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{marginTop: 20,paddingLeft:20,width:w, height:48, backgroundColor:'rgba(43, 38, 77, 0.5)'}}
          onPress={() => {
            this.props.fonScreen()
          }}>


            <Text
              style={{
                fontWeight: '300',
                marginTop: 12,
                marginBottom: 12,
                color: '#f1f1f2',
                height: 24,
                width: 202,
                fontSize: 16,
                letterSpacing: 0.5,
              }}>
              Настройка фона и звука
            </Text>
          </TouchableOpacity>
          <View
            style={{
              paddingLeft: 20,
              flexDirection: 'row',
              paddingRight: 30,
              justifyContent: 'space-between',
              backgroundColor: 'rgba(43, 38, 77, 0.5)',
            }}>
            <Text
              style={{
                fontWeight: '300',
                marginTop: 12,
                marginBottom: 12,
                color: '#f1f1f2',
                height: 24,
                width: 202,
                fontSize: 16,
                letterSpacing: 0.5,
              }}>
              Напоминания
            </Text>
            <Switch
            thumbColor={'#1488cc'}
            trackColor={{true: '#2b264d', false: '#2b264d'}}
              style={{marginTop:8, marginBottom:8,width:56,height:32}}
            onValueChange={() => {
              this.props.navigation.navigate('ReminderScreen')
            }}
               value={this.state.showPass}
               //value={this.props.navigation.navigate('ReminderScreen')}
            />
          </View>
          <TouchableOpacity style={{width:w,paddingLeft:20, height:48, backgroundColor:'rgba(43, 38, 77, 0.5)'}}
          onPress={() => {
            this.props.downloadsScreen()
          }}>
            <Text style={{fontWeight:'300',marginTop:12,marginBottom:12,color: '#f1f1f2',height:24,width:202,fontSize: 16,}}>
              Загруженные
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:w,paddingLeft:20, height:48, backgroundColor:'rgba(43, 38, 77, 0.5)'}}
          onPress={() => {
            this.props.infoaccScreen()
          }}>
            <Text style={{fontWeight:'300',marginTop:12,marginBottom:12,color: '#f1f1f2',height:24,width:202,fontSize: 16,}}>
              Информация об аккаунте
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{width:w,paddingLeft:20, height:48, backgroundColor:'rgba(43, 38, 77, 0.5)'}}
          onPress={() => {
            this.props.helpScreen()
          }}>
        {/*//style={{width:w,paddingLeft:20, height:48, backgroundColor:'rgba(43, 38, 77, 0.5)'}}>*/}


            <Text style={{fontWeight:'300',marginTop:12,marginBottom:12,color: '#f1f1f2',height:24,width:202,fontSize: 16,}}>
              Помощь
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:w,paddingLeft:20, height:48, backgroundColor:'rgba(43, 38, 77, 0.5)'}}>
            <Text style={{fontWeight:'300',marginTop:12,marginBottom:12,color: '#f1f1f2',height:24,width:202,fontSize: 16,}}>
              Выйти
            </Text>
          </TouchableOpacity>

        </LinearGradient>

      </ScrollView>
    );
  }
}
