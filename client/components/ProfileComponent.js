import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
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
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <LinearGradient
          colors={[
            'rgba(15, 12, 41, 0.98)',
            'rgba(20, 20, 52, 0.98)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(41, 37, 87, 1)',
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
                style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>
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
              backgroundColor: 'white',
              width: '100%',marginTop:21,
            }}>
            <View style={{width: '33%', alignItems: 'center'}}>
              <Text
                numberOfLines={2}
                style={{
                  color: 'black',
                  width: 90,
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                General time of meditation
              </Text>
              <Text
                numberOfLines={2}
                style={{marginTop: 10, color: 'black', textAlign: 'center'}}>
                60
              </Text>
            </View>
            <View style={{width: '33%', alignItems: 'center'}}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
                Streak
              </Text>
              <Text
                numberOfLines={2}
                style={{marginTop: 25, color: 'black', textAlign: 'center'}}>
                10
              </Text>
            </View>
            <View style={{width: '33%', alignItems: 'center'}}>
              <Text
                numberOfLines={2}
                style={{
                  color: 'black',
                  width: 90,
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                1 session - meditate
              </Text>
              <Text
                numberOfLines={2}
                style={{marginTop: 10, color: 'black', textAlign: 'center'}}>
                5
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{margin: 20}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
              Invite
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 20}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
              Community?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 20}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
              Background
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      
      </View>
    );
  }
}
