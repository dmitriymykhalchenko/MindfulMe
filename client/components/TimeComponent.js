import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Switch,
  Picker,
  DatePickerIOS,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';

import {connect} from 'react-redux';
const IMAGE_HEIGHT =
  (h - (isIphoneX() ? 74 : 44) - (isIphoneX() ? 70 : 50)) / 3 - (19 + 25 + 13);

const IMAGE_WIDTH = (IMAGE_HEIGHT / 133) * 154;
const MINUTES = [
  0,1,2,3,4,5,6,7,8,9,
  10,11,12,13,14,15,16,17,18,19,
  20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46,47,48,49,
  50,51,52,53,54,55,56,57,58,59
]
export default class TimeComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {};
  };
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);

    this.state = {
      isLoading: true,
      dataSource: [],
      showPass: false,
      check:true,
      date: new Date(),
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

  componentDidMount() {
    return fetch(
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          () => {},
        );
        console.log('responseJson ', responseJson);
      })
      .catch(error => {
        throw error;
        console.error(error);
      });
  }

  render() {
    const {navigation} = this.props;
    const DATA = this.state.dataSource;
    return (
      <SafeAreaView style={{flex: 1, marginTop: -20, width: w}}>
        <Image
          source={Icon.INDEPENDENTBG}
          style={{
            width: w,
            height: h,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.12,
          }}
        />

        <View
          style={{
            paddingLeft: 15,
            marginTop: 33,
            paddingBottom: 63,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{backgroundColor: 'rgba(15, 12, 41, 0.98)'}}>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              style={{width: 12, height: 7.4}}
              onPress={() => {
                this.props.backPressed();
              }}>
              <Image source={Icon.BACK} style={{tintColor: '#ffffff'}} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 16,
                color: '#ffffff',
                fontFamily: 'SFUIText-Regular',
                textAlign: 'center',
                //justifyContent:'center',alignSelf:'center'
                // width: 335,
                // height: 18,
              }}>
              Продолжительность медитации
            </Text>
          </View>
          <View style={{marginRight: 50}} />
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
              //  marginHorizontal:40
            }}>
            <View style={{}}>
              <Picker
                itemStyle={{fontSize: 23, color: 'white'}}
                textColor="#FFFFFF"
                selectedValue={this.state.language}
                style={{
                  height: 50,
                  width: 100,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  color: 'white',
                  tintColor: 'white',
                }}
                onValueChange={(itemValue, itemIndex) => {
                  console.log('itemValue - ', itemValue);
                  this.setState({language: itemValue})
                }}>

                {MINUTES.map(m =>
                  <Picker.Item key={m.toString()} label={m.toString()} value={m.toString()} />
                )}

              </Picker>
            </View>
            <View style={{marginTop: 10, marginLeft: 36}}>
              <Text
                style={{
                  fontFamily: 'SFUIText-Regular',
                  color: '#ffffff',
                  fontSize: 23,
                  textAlign: 'right',
                }}>
                мин.
              </Text>
            </View>
          </View>
          {/*<View style={{}}>
<DatePicker
fadeToColor="transparent"
locale={'ru_UA'}
mode={'date'}
textColor="#FFFFFF"
date={this.state.date}
onDateChange={date => this.setState({ date })}
/>
</View>*/}

          <View style={{marginTop: '60%', marginHorizontal: 40}}>
            <TouchableOpacity
              style={{
                //  marginTop:"30%",
                // width: 295,
                height: 50,
                backgroundColor: '#1488cc',
                borderRadius: 10,
                //marginRight: 12,
                //marginTop: 31,
                justifyContent: 'center',
                alignSelf: 'stretch',
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
                Приступить к медитации
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {this.setState({check: !this.state.check})}}
            style={{flexDirection: 'row', marginTop: 43, marginHorizontal: 40}}>
            <View
              style={{
                width: 16,
                height: 16,
                borderWidth: 1,
                borderColor: '#ffffff',
                marginRight: 11,
              }}>
              {this.state.check &&
                <Image
                  source={Icon.CHECK}
                  style={{
                    tintColor: '#ffffff',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 2,
                    resizeMode: 'contain',
                    width: 10,
                    height: 8,
                  }}
                />
              }
            </View>
            <View>
              <Text
                numberOfLines={2}
                style={{
                  textDecorationLine: 'underline',
                  fontFamily: 'SFUIText-Semibold',
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#ffffff',
                  marginRight: 87,
                }}>
                Сохранить выбранное время для медитации{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondcontainer: {
    //flex: 1,
    //paddingTop: 20,
  },
  touch: {
    //flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  image: {
    width: 115,
    height: 80,
    margin: 17,
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    width: 100,
    textAlign: 'center',
    color: 'white',
  },
  detView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBig: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  active: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
