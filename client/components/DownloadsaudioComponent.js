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
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
const IMAGE_HEIGHT =
  (h - (isIphoneX() ? 74 : 44) - (isIphoneX() ? 70 : 50)) / 3 - (19 + 25 + 13);

const IMAGE_WIDTH = (IMAGE_HEIGHT / 133) * 154;
export default class DownloadsaudioComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'Медитации1111',
      headerBackTitleStyle: {
        color: 'transparent',
      },
      headerStyle: {
        backgroundColor: 'rgb(24,12,53)',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        //  flex: 1,
        textAlign: 'center',
      },
      headerRight: <TouchableOpacity style={{height: 60, width: 60}} />,
      // tabBarOptions: {
      //   labelStyle: {
      //     fontSize: 12,
      //     tintColor:'red'
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
    this.state = {
      isLoading: true,
      dataSource: [],
    };
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
          source={Icon.MINDSELF}
          style={{
            width: w,
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
          <TouchableOpacity
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            style={{width: 12, height: 7.4}}
            onPress={() => {
              this.props.backPressed();
            }}>
            <Image source={Icon.BACK} style={{tintColor: '#ffffff'}} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: '#ffffff',
              fontFamily: 'SFUIText-Regular',
              textAlign: 'center',
              //justifyContent:'center',alignSelf:'center'
              width: 335,
              height: 18,
            }}>
            Загруженные аудиозаписи
          </Text>
        </View>
<ScrollView>
        <View
          style={{
            //backgroundColor: 'rgba(43,38,77,0.5)',
            marginBottom: 1,
            width: w,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              paddingLeft: 14,
              flexDirection: 'row',
              alignItems: 'center',
              //paddingBottom: isIphoneX() ? 20 : 0,
              // height: isIphoneX() ? 70 : 50, // висота
            }}>
            <View style={{justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ababb6',
                  paddingTop: 12,
                  fontFamily: 'SFUIText-Light',
                  color: '#ababb6',
                }}>
                1
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                paddingTop: 12,
                backgroundColor: 'rgba(43,38,77,0.5)',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                }}>
                Track One
              </Text>

              <Image
                source={Icon.TICK}
                style={{
                  width: 12,
                  height: 7,
                  marginLeft: 21,
                  resizeMode: 'cover',

                  //borderBottomWidth:2.9,
                  tintColor: '#7ed321',
                }}
              />
              <Text
                style={{
                  // flexDirection:'column',
                  // flex:1,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 19,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                Done
              </Text>
              <Text
                style={{
                  height:14,
                  width:41,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 53,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                10 min
              </Text>

              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginLeft: '17%',
                }}>
                <Image
                  source={Icon.DOWNLOADHEART}
                  style={{
                    resizeMode: 'cover',
                    justifyContent: 'flex-end',
                    // //alignItems:'flex-start',
                    // alignSelf:'flex-start',
                    // width: 18,
                    // height: 16,
                    //marginLeft:31,
                    tintColor: '#1488cc',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              //  justifyContent:'flex-end',
              paddingLeft: '9%',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12,
                fontWeight: '300',
                fontFamily: 'SFUIText-Light',
                paddingBottom: 16,
              }}>
              Коллекция «Концентрация»
            </Text>
          </View>
        </View>

        <View
          style={{
            //backgroundColor: 'rgba(43,38,77,0.5)',
            marginBottom: 1,
            width: w,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              paddingLeft: 14,
              flexDirection: 'row',
              alignItems: 'center',
              //paddingBottom: isIphoneX() ? 20 : 0,
              // height: isIphoneX() ? 70 : 50, // висота
            }}>
            <View style={{justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ababb6',
                  paddingTop: 12,
                  fontFamily: 'SFUIText-Light',
                  color: '#ababb6',
                }}>
                2
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                paddingTop: 12,
                backgroundColor: 'rgba(43,38,77,0.5)',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                }}>
                Track One
              </Text>

              <Image
                source={Icon.TICK}
                style={{
                  width: 12,
                  height: 7,
                  marginLeft: 21,
                  resizeMode: 'cover',

                  //borderBottomWidth:2.9,
                  tintColor: '#7ed321',
                }}
              />
              <Text
                style={{
                  // flexDirection:'column',
                  // flex:1,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 19,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                Done
              </Text>
              <Text
                style={{
                  height:14,
                  width:41,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 53,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                5 min
              </Text>

              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginLeft: '17%',
                }}>
                <Image
                  source={Icon.DOWNLOADHEART}
                  style={{
                    resizeMode: 'cover',
                    justifyContent: 'flex-end',
                    // //alignItems:'flex-start',
                    // alignSelf:'flex-start',
                    // width: 18,
                    // height: 16,
                    //marginLeft:31,
                    tintColor: '#1488cc',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              //  justifyContent:'flex-end',
              paddingLeft: '9%',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12,
                fontWeight: '300',
                fontFamily: 'SFUIText-Light',
                paddingBottom: 16,
              }}>
              Коллекция «Концентрация»
            </Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: 'rgba(43,38,77,0.5)',
            marginBottom: 1,
            width: w,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              paddingLeft: 14,
              flexDirection: 'row',
              alignItems: 'center',
              //paddingBottom: isIphoneX() ? 20 : 0,
              // height: isIphoneX() ? 70 : 50, // висота
            }}>
            <View style={{justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ababb6',
                  paddingTop: 12,
                  fontFamily: 'SFUIText-Light',
                  color: '#ababb6',
                }}>
                3
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                paddingTop: 12,
                backgroundColor: 'rgba(43,38,77,0.5)',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                }}>
                Track One
              </Text>

              <Image
                source={Icon.TICK}
                style={{
                  width: 12,
                  height: 7,
                  marginLeft: 21,
                  resizeMode: 'cover',

                  //borderBottomWidth:2.9,
                  tintColor: '#7ed321',
                }}
              />
              <Text
                style={{
                  // flexDirection:'column',
                  // flex:1,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 19,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                Done
              </Text>
              <Text
                style={{
                  height:14,
                  width:41,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 53,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                20 min
              </Text>

              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginLeft: '17%',
                }}>
                <Image
                  source={Icon.DOWNLOADHEART}
                  style={{
                    resizeMode: 'cover',
                    justifyContent: 'flex-end',
                    // //alignItems:'flex-start',
                    // alignSelf:'flex-start',
                    // width: 18,
                    // height: 16,
                    //marginLeft:31,
                    tintColor: '#1488cc',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              //  justifyContent:'flex-end',
              paddingLeft: '9%',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12,
                fontWeight: '300',
                fontFamily: 'SFUIText-Light',
                paddingBottom: 16,
              }}>
              Коллекция «Концентрация»
            </Text>
          </View>
        </View>
        <View
          style={{
            //backgroundColor: 'rgba(43,38,77,0.5)',
            marginBottom: 1,
            width: w,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              paddingLeft: 14,
              flexDirection: 'row',
              alignItems: 'center',
              //paddingBottom: isIphoneX() ? 20 : 0,
              // height: isIphoneX() ? 70 : 50, // висота
            }}>
            <View style={{justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ababb6',
                  paddingTop: 12,
                  fontFamily: 'SFUIText-Light',
                  color: '#ababb6',
                }}>
                4
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                paddingTop: 12,
                backgroundColor: 'rgba(43,38,77,0.5)',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Regular',
                }}>
                Track One
              </Text>

              <Image
                source={Icon.TICK}
                style={{
                  width: 12,
                  height: 7,
                  marginLeft: 21,
                  resizeMode: 'cover',

                  //borderBottomWidth:2.9,
                  tintColor: '#7ed321',
                }}
              />
              <Text
                style={{
                  // flexDirection:'column',
                  // flex:1,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 19,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                Done
              </Text>
              <Text
                style={{
                  height:14,
                  width:41,
                  fontSize: 12,
                  fontWeight: '300',
                  marginLeft: 53,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                }}>
                10 min
              </Text>

              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginLeft: '17%',
                }}>
                <Image
                  source={Icon.DOWNLOADHEART}
                  style={{
                    resizeMode: 'cover',
                    justifyContent: 'flex-end',
                    // //alignItems:'flex-start',
                    // alignSelf:'flex-start',
                    // width: 18,
                    // height: 16,
                    //marginLeft:31,
                    tintColor: '#1488cc',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(43,38,77,0.5)',
              //  justifyContent:'flex-end',
              paddingLeft: '9%',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12,
                fontWeight: '300',
                fontFamily: 'SFUIText-Light',
                paddingBottom: 16,
              }}>
              Коллекция «Концентрация»
            </Text>
          </View>
        </View>
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
