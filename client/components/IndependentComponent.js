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
export default class IndependentComponent extends React.Component {
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
          <View style={{backgroundColor: '#2b264d'}}>
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
              Самостоятельные
            </Text>
          </View>
          <View style={{marginRight: 18}}>
            <Image source={Icon.INDEPENDENT} style={{tintColor: '#ffffff'}} />
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 15,
              marginTop: 33,
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(43,38,77,0.5)',
            }}>
            <View>
              <TouchableOpacity
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                style={{width: 12, height: 7.4}}
                onPress={() => {
                  //this.props.backPressed();
                }}>
                <Image
                  source={Icon.RING}
                  style={{
                    tintColor: '#ffffff',
                    width: 25,
                    height: 25,
                    resizeMode: 'stretch',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, paddingLeft: 14}}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 12,
                  color: '#ffffff',
                  fontFamily: 'SFUIText-Light',
                  //textAlign: 'left',
                  //justifyContent:'center',alignSelf:'center'
                  width: 173,
                  // height: 18,
                }}>
                Оповещать звуком начало и конец медитации
              </Text>
            </View>
            <View style={{marginRight: 18}}>
              <Switch
                ios_backgroundColor="#2b264d"
                //color='red'
                thumbColor={'#ffffff'}
                trackColor={{true: 'rgb(43,38,77)', false: 'rgb(43,38,77)'}}
                style={{marginTop: 8, marginBottom: 8, width: 56, height: 32}}
                onValueChange={() => {
                  //this.props.navigation.navigate('ReminderScreen')
                }}
                value={this.state.showPass}
                //value={this.props.navigation.navigate('ReminderScreen')}
              />
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
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
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    Track One
                  </Text>
                </View>

                <Text
                  style={{
                    height: 14,
                    width: 41,
                    fontSize: 12,
                    fontWeight: '300',
                    marginLeft: '12%',
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
                    marginLeft: 33,
                  }}>
                  <Image
                    source={Icon.DOWNLOADHEART}
                    style={{
                      //backgroundColor:'#1488cc',
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
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
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    Track Two
                  </Text>
                </View>

                <Text
                  style={{
                    height: 14,
                    width: 41,
                    fontSize: 12,
                    fontWeight: '300',
                    marginLeft: '12%',
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
                    marginLeft: 33,
                  }}>
                  <Image
                    source={Icon.INDHEART}
                    style={{
                      //backgroundColor:'#1488cc',
                      resizeMode: 'cover',
                      justifyContent: 'flex-end',
                      // //alignItems:'flex-start',
                      // alignSelf:'flex-start',
                      // width: 18,
                      // height: 16,
                      //marginLeft:31,
                      ////tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
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
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    Track Three
                  </Text>
                </View>

                <Text
                  style={{
                    height: 14,
                    width: 41,
                    fontSize: 12,
                    fontWeight: '300',
                    marginLeft: '12%',
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
                    marginLeft: 33,
                  }}>
                  <Image
                    source={Icon.INDHEART}
                    style={{
                      //backgroundColor:'#1488cc',
                      resizeMode: 'cover',
                      justifyContent: 'flex-end',
                      // //alignItems:'flex-start',
                      // alignSelf:'flex-start',
                      // width: 18,
                      // height: 16,
                      //marginLeft:31,
                      //tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
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
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    Track Four
                  </Text>
                </View>

                <Text
                  style={{
                    height: 14,
                    width: 41,
                    fontSize: 12,
                    fontWeight: '300',
                    marginLeft: '12%',
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
                    marginLeft: 33,
                  }}>
                  <Image
                    source={Icon.INDHEART}
                    style={{
                      //backgroundColor:'#1488cc',
                      resizeMode: 'cover',
                      justifyContent: 'flex-end',
                      // //alignItems:'flex-start',
                      // alignSelf:'flex-start',
                      // width: 18,
                      // height: 16,
                      //marginLeft:31,
                      //tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
                    color: '#ababb6',
                  }}>
                  5
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,

                  paddingTop: 12,
                  backgroundColor: 'rgba(43,38,77,0.5)',
                }}>
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    Track Five
                  </Text>
                </View>

                <Text
                  style={{
                    height: 14,
                    width: 41,
                    fontSize: 12,
                    fontWeight: '300',
                    marginLeft: '12%',
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  25 min
                </Text>

                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginLeft: 33,
                  }}>
                  <Image
                    source={Icon.INDHEART}
                    style={{
                      //backgroundColor:'#1488cc',
                      resizeMode: 'cover',
                      justifyContent: 'flex-end',
                      // //alignItems:'flex-start',
                      // alignSelf:'flex-start',
                      // width: 18,
                      // height: 16,
                      //marginLeft:31,
                      //tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
                    color: '#ababb6',
                  }}>
                  6
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,

                  paddingTop: 12,
                  backgroundColor: 'rgba(43,38,77,0.5)',
                }}>
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    Track Six
                  </Text>
                </View>

                <Text
                  style={{
                    height: 14,
                    width: 41,
                    fontSize: 12,
                    fontWeight: '300',
                    marginLeft: '12%',
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  30 min
                </Text>

                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginLeft: 33,
                  }}>
                  <Image
                    source={Icon.INDHEART}
                    style={{
                      //backgroundColor:'#1488cc',
                      resizeMode: 'cover',
                      justifyContent: 'flex-end',
                      // //alignItems:'flex-start',
                      // alignSelf:'flex-start',
                      // width: 18,
                      // height: 16,
                      //marginLeft:31,
                      //tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
                    color: '#ababb6',
                  }}>
                  7
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,

                  paddingTop: 12,
                  backgroundColor: 'rgba(43,38,77,0.5)',
                }}>
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    My time
                  </Text>
                </View>
                <View style={{marginLeft: '17%'}}>
                  <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Setting');
                    // this.setState({
                    //   MeditationScreen: true,
                    //   HomeScreen: false,
                    // });
                    this.props.timeScreen();
                  }}
                  >
                    <Text
                      style={{
                        width: 99,
                        fontSize: 12,
                        fontWeight: '300',
                        marginLeft: '9%',
                        color: '#1488cc',
                        fontFamily: 'SFUIText-Light',
                      }}>
                      Выбрать время
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginLeft: 33,
                  }}>
                  <Image
                    source={Icon.INDHEART}
                    style={{
                      //backgroundColor:'#1488cc',
                      resizeMode: 'cover',
                      justifyContent: 'flex-end',
                      // //alignItems:'flex-start',
                      // alignSelf:'flex-start',
                      // width: 18,
                      // height: 16,
                      //marginLeft:31,
                      //tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
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
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                }}>
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
                <View style={{flex: 1, backgroundColor: 'transparent'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#ffffff',
                      fontFamily: 'SFUIText-Regular',
                    }}>
                    My saved time
                  </Text>
                </View>
                <Text
                  style={{
                    height: 14,
                    width: 41,
                    fontSize: 12,
                    fontWeight: '300',
                    marginLeft: '12%',
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
                    marginLeft: 33,
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
