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
export default class MeditationComponent extends React.Component {
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
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'transparent'}}>
        <View
          style={{
            paddingLeft: 15,
            marginTop: 13,
            paddingBottom:31,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            hitSlop={{top:10,bottom:10,left:10,right:10}}
            style={{width: 12, height: 7.4}}
            onPress={() => {
              this.props.backPressed();
            }}>
            <Image
              source={Icon.BACK}
                style={{tintColor: '#ffffff', }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: '#ffffff',
              fontFamily: 'SFUIText-Regular',
              textAlign: 'center',
              width: 335,
              height: 18,
            }}>
            Медитации
          </Text>
        </View>

        <View
          style={{
          //  flex: 3/1,
            marginTop: 17,
            marginLeft: 25,
            backgroundColor: 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              // flexWrap: 'wrap',
              // width: w / 2,
              // marginTop: 30,
              // padding: 20,
              // flexShrink: 2,
            }}>


          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop:17,
              // flexWrap: 'wrap',
              // width: w / 2,
              // marginTop: 30,
              // padding: 20,
              // flexShrink: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                marginRight: 17,
                borderRadius: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  //this.props.backPressed();
                }}>
                <Image
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    justifyContent: 'center',
                  }}
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1574983097346-bf874abb9eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ',
                  }}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 2,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 15,
                      bottom: 12,
                      fontSize: 12,
                      fontFamily: 'SFUIText-Regular',
                      color: '#ffffff',
                      textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    Базовый курс
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                marginRight: 17,
                borderRadius: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  //this.props.backPressed();
                }}>
                <Image
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    justifyContent: 'center',
                  }}
                  source={{
                    uri:
'https://images.unsplash.com/photo-1574983097346-bf874abb9eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ'                  }}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 2,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 15,
                      bottom: 12,
                      fontSize: 12,
                      fontFamily: 'SFUIText-Regular',
                      color: '#ffffff',
                      textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    Концентрация
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop:17,
              // flexWrap: 'wrap',
              // width: w / 2,
              // marginTop: 30,
              // padding: 20,
              // flexShrink: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                marginRight: 17,
                borderRadius: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  //this.props.backPressed();
                }}>
                <Image
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    justifyContent: 'center',
                  }}
                  source={{
                    uri:
'https://images.unsplash.com/photo-1574983097346-bf874abb9eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ'                  }}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 2,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 15,
                      bottom: 12,
                      fontSize: 12,
                      fontFamily: 'SFUIText-Regular',
                      color: '#ffffff',
                      textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    Управление стрессом
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                marginRight: 17,
                borderRadius: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  //this.props.backPressed();
                }}>
                <Image
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    justifyContent: 'center',
                  }}
                  source={{
                    uri:
'https://images.unsplash.com/photo-1574983097346-bf874abb9eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ'                  }}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 2,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 15,
                      bottom: 12,
                      fontSize: 12,
                      fontFamily: 'SFUIText-Regular',
                      color: '#ffffff',
                      textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    Баланс
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
         <View
            style={{
              flexDirection: 'row',
              marginTop:17,
              // flexWrap: 'wrap',
              // width: w / 2,
              // marginTop: 30,
              // padding: 20,
              // flexShrink: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                marginRight: 17,
                borderRadius: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  //this.props.backPressed();
                }}>
                <Image
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    justifyContent: 'center',
                  }}
                  source={{
                    uri:
'https://images.unsplash.com/photo-1574983097346-bf874abb9eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ'                  }}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 2,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 15,
                      bottom: 12,
                      fontSize: 12,
                      fontFamily: 'SFUIText-Regular',
                      color: '#ffffff',
                      textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    Самостоятельные
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                marginRight: 17,
                borderRadius: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  //this.props.backPressed();
                }}>
                <Image
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    justifyContent: 'center',
                  }}
                  source={{
                    uri:
'https://images.unsplash.com/photo-1574983097346-bf874abb9eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMyNDU2fQ'                  }}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 2,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 15,
                      bottom: 12,
                      fontSize: 12,
                      fontFamily: 'SFUIText-Regular',
                      color: '#ffffff',
                      textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    Бесконечные
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
