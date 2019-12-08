import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  StatusBar,
DatePickerIOS,
Button
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';

export default class InviteScreen extends React.Component {
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
      date: new Date(),
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

        <StatusBar backgroundColor="green" barStyle="light-content" />
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
            <View style={{backgroundColor: 'transparent', marginRight: '38%'}}>
              <Text
                style={{
                  //width: '80%',
                  fontSize: 16,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'center',
                  // justifyContent:'center',
                  // alignSelf:'center',
                  // alignItems:'center'
                  // width: 209,
                  // height: 18,
                }}>
                Пригласить
              </Text>
            </View>
          </View>
<TouchableOpacity>
          <View
            style={{
              marginRight:'4%',
              marginTop: 31,
              flexDirection: 'row',
              marginLeft:17,
              borderBottomWidth:0.5,
              borderColor:"#BCBBC1",
              paddingBottom:10
              // borderBottomWidth:0.5,
              // borderColor:"#BCBBC1",
              // borderTopWidth:0.5
            }}>
            <Image
              source={Icon.PAGES}
              style={{
                marginLeft:17,
                tintColor: '#1488cc',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
            />
            <View style={{backgroundColor: 'transparent', marginLeft:12}}>
              <Text
                style={{
                  marginLeft:16,
                  fontSize: 17,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'left',
                  //marginLeft:5
                }}>
                Пригласить по ссылке
              </Text>
              <Text
                style={{
                  marginLeft:16,
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'SFUIText-Regular',
                  //textAlign: 'center',
                  //marginLeft:60,
                }}>
                https:/MindSelf.com/z7qgq
              </Text>
            </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
          <View
            style={{
              marginRight:'4%',
              // marginTop: 31,
              flexDirection: 'row',
              marginLeft:16,
              paddingTop:10,
              borderBottomWidth:0.5,
              borderColor:"#BCBBC1",
            //  borderTopWidth:0.5
            }}>
            <Image
              source={Icon.TELEGRAM}
              style={{
                marginLeft:16,
                marginBottom:7,
                //tintColor: '#1488cc',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
            />
            <View style={{backgroundColor: 'transparent', marginLeft:12}}>
              <Text
                style={{
                  marginRight:'4%',

                  marginLeft:16,
                  fontSize: 17,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'center',


                }}>
                Telegram
                </Text>
            </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
          <View
            style={{
              marginRight:'4%',

              //marginTop: 31,
              flexDirection: 'row',
              marginLeft:16,
              paddingTop:10,
              borderBottomWidth:0.5,
              borderColor:"#BCBBC1",
              // borderBottomWidth:0.5,
              // borderColor:"#BCBBC1",
              // borderTopWidth:0.5
            }}>
            <Image
              source={Icon.VIBER}
              style={{
                marginBottom:7,
                marginLeft:16,
                //tintColor: '#1488cc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <View style={{backgroundColor: 'transparent', marginLeft:12}}>
              <Text
                style={{

                  marginLeft:16,
                  fontSize: 17,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'left',
                  //marginLeft:5
                }}>
                Viber
              </Text>
            </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
          <View
            style={{
              marginRight:'4%',

              paddingTop:10,
              borderBottomWidth:0.5,
              borderColor:"#BCBBC1",
              // borderBottomWidth:0.5,
              // borderColor:"#BCBBC1",
              //marginTop: 31,
              flexDirection: 'row',
              marginLeft:17,

              // borderBottomWidth:0.5,
              // borderColor:"#BCBBC1",
              // borderTopWidth:0.5
            }}>
            <Image
              source={Icon.WHATSAPP}
              style={{
                marginLeft:16,
                marginBottom:7,
              //  tintColor: '#1488cc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <View style={{backgroundColor: 'transparent', marginLeft:12}}>
              <Text
                style={{
                  marginLeft:16,
                  fontSize: 17,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'left',
                  //marginLeft:5
                }}>
                WhatsApp
              </Text>

            </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
          <View
            style={{
              paddingTop:10,
              // borderBottomWidth:0.5,
              // borderColor:"#BCBBC1",
              //marginTop: 31,
              flexDirection: 'row',
              marginLeft:17,

              // borderBottomWidth:0.5,
              // borderColor:"#BCBBC1",
              // borderTopWidth:0.5
            }}>
            <Image
              source={Icon.MESSENGER}
              style={{
                marginLeft:16,
                //tintColor: '#1488cc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <View style={{backgroundColor: 'transparent', marginLeft:12}}>
              <Text
                style={{
                  marginLeft:16,
                  fontSize: 17,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                  textAlign: 'left',
                  //marginLeft:5
                }}>
                Messenger
              </Text>

            </View>
            </View>
            </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
