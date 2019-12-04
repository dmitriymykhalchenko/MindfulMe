import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  ImageBackground,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

export default class FavoriteComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#f2f2f2',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <TouchableOpacity style={{height: 60, width: 60}} />,
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 10,
        },
        style: {
          backgroundColor: 'green',
        },
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
    const {navigation} = this.props;

    return (
      <SafeAreaView
        style={{flex: 1, marginTop: -20,width:w,}}>
        <Image
          source={Icon.MINDSELF}
          style={{
            width:w,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.12,
          }}
        />

        {/* section */}
        <View
          style={{
            paddingTop: isIphoneX() ? 63 : 33,
            alignItems: 'center',
          }}>
          <View style={{marginBottom: 63}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'SFUIText-Regular',
                textAlign: 'center',
                color: '#ffffff',
              }}>
              Избранное
            </Text>
          </View>
          <View style={{backgroundColor: 'rgba(43,38,77,0.5)'}}>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 14,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: isIphoneX() ? 20 : 0,
                // height: isIphoneX() ? 70 : 50, // висота
                width: w,
              }}>
              <View style={{justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
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
                    tintColor: '#7ed321',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 18,
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  Done
                </Text>
                <TouchableOpacity>
                  <Image
                    source={Icon.HEARTNB}
                    style={{
                      width: 18.8,
                      height: 16.7,
                      marginLeft: 124,
                      tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 32,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  fontFamily: 'SFUIText-Light',
                  paddingBottom: 16,
                }}>
                Коллекция «Концентрация»
              </Text>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(43,38,77,0.5)'}}>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 14,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: isIphoneX() ? 20 : 0,
                // height: isIphoneX() ? 70 : 50, // висота
                width: w,
              }}>
              <View style={{justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
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
                    tintColor: '#7ed321',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 18,
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  Done
                </Text>
                <TouchableOpacity>
                  <Image
                    source={Icon.HEARTNB}
                    style={{
                      width: 18.8,
                      height: 16.7,
                      marginLeft: 124,
                      tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 32,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  fontFamily: 'SFUIText-Light',
                  paddingBottom: 16,
                }}>
                Коллекция «Концентрация»
              </Text>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(43,38,77,0.5)'}}>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 14,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: isIphoneX() ? 20 : 0,
                // height: isIphoneX() ? 70 : 50, // висота
                width: w,
              }}>
              <View style={{justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
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
                    tintColor: '#7ed321',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 18,
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  Done
                </Text>
                <TouchableOpacity>
                  <Image
                    source={Icon.HEARTNB}
                    style={{
                      width: 18.8,
                      height: 16.7,
                      marginLeft: 124,
                      tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 32,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  fontFamily: 'SFUIText-Light',
                  paddingBottom: 16,
                }}>
                Коллекция «Концентрация»
              </Text>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(43,38,77,0.5)'}}>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 14,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: isIphoneX() ? 20 : 0,
                // height: isIphoneX() ? 70 : 50, // висота
                width: w,
              }}>
              <View style={{justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
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
                    tintColor: '#7ed321',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 18,
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  Done
                </Text>
                <TouchableOpacity>
                  <Image
                    source={Icon.HEARTNB}
                    style={{
                      width: 18.8,
                      height: 16.7,
                      marginLeft: 124,
                      tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 32,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  fontFamily: 'SFUIText-Light',
                  paddingBottom: 16,
                }}>
                Коллекция «Концентрация»
              </Text>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(43,38,77,0.5)'}}>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 14,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: isIphoneX() ? 20 : 0,
                // height: isIphoneX() ? 70 : 50, // висота
                width: w,
              }}>
              <View style={{justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#ababb6',
                    paddingTop: 12,
                    fontFamily: 'SFUIText-Light',
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
                    tintColor: '#7ed321',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 18,
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  Done
                </Text>
                <TouchableOpacity>
                  <Image
                    source={Icon.HEARTNB}
                    style={{
                      width: 18.8,
                      height: 16.7,
                      marginLeft: 124,
                      tintColor: '#1488cc',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 32,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  fontFamily: 'SFUIText-Light',
                  paddingBottom: 16,
                }}>
                Коллекция «Концентрация»
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
