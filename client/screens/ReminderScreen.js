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

export default class ReminderScreen extends React.Component {
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
      <SafeAreaView style={{flex: 1, width: w}}>
        {/*<StatusBar hidden={false}/>
        <StatusBar backgroundColor="red" barStyle="dark-content" />*/}
        <StatusBar hidden={true} />
        <StatusBar backgroundColor="red" barStyle="dark-content" />
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
              marginTop: 33,
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
            <View style={{backgroundColor: 'transparent', marginRight: '28%'}}>
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
                Время напоминаний
              </Text>
            </View>
          </View>

          <View
            style={{
              marginLeft: 40,
              marginRight: 39,
              marginTop: 73,
              flexDirection: 'row',
            }}>
            <View style={{backgroundColor: 'transparent', paddingLeft: 14}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '300',
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                  //lineHeight: 20,
                }}>
                Улучшайте сон, улучшайте концентрацию и повышайте качество своей
                жизни, ежедневно практикуя осознанность
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 25,
              marginBottom:90,
            }}>
            <View style={{}}>
            <DatePicker
            mode={'time'}
            textColor="#FFFFFF"
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
            />
            </View>
          </View>

          <TouchableOpacity
            style={{
            //  marginTop:"30%",
              width: 295,
              height: 50,
              backgroundColor: '#1488cc',
              borderRadius: 10,
              //marginRight: 12,
              //marginTop: 31,
              justifyContent:'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                //paddingTop: 10,
                textAlign: 'center',
                justifyContent: 'center',
                // marginTop:16,
                // marginBottom:15,
                color: '#ffffff',
                fontFamily: 'SFUIText-Light',
                fontSize: 16,
              }}>
              Сохранить
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
