// import React from 'react';
// import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {h, w, isIphoneX} from '../../constants';
// import Icon from '../styles/icon';
//
// export default class HomeScreen extends React.Component {
//   // static navigationOptions = ({navigation, navigationOptions}) => {
//   //   return {
//   //     tabBarOptions: {
//   //       activeTintColor: 'tomato',
//   //       inactiveTintColor: 'gray',
//   //       backgroundColor: 'black',
//   //
//   //       tabStyle: {
//   //         padding: 0,
//   //         margin: 0,
//   //         borderWidth: 2,
//   //         borderColor: 'green', //Padding 0 here
//   //       },
//   //       style: {
//   //         //backgroundColor: 'blue',
//   //       },
//   //       iconStyle: {
//   //         //backgroundColor: 'black',
//   //         //tintColor:'yellow',
//   //         width: 50,
//   //         height: 100,
//   //         padding: 0, //Padding 0 here
//   //       },
//   //     },
//   //   };
//   // };
//
//   render() {
//     const {navigation} = this.props;
//
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'rgb(44,28,88)',
//         }}>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//             margin: 5,
//             backgroundColor: 'yellow',
//             position: 'absolute',
//             //  top: 0 ,
//             //left: 0,
//             height: '5%', // висота
//             width: '65%',
//             bottom: 0,
//           }}>
//           <TouchableOpacity
//             style={{
//               width: '50%',
//               height: '140%',
//               backgroundColor: 'red',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               this.props.navigation.navigate('HomeScreen');
//             }}>
//             <Image
//               source={Icon.HOMES}
//               style={{width: 24, height: 24, tintColor: 'white'}}
//             />
//             <Text>Home!</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               width: '50%',
//               height: '140%',
//               backgroundColor: 'red',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               this.props.navigation.navigate('ProfileScreen');
//             }}>
//             <Text>Profile</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               width: '50%',
//               height: '140%',
//               backgroundColor: 'red',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               this.props.navigation.navigate('SettingScreen');
//             }}>
//             <Text>Setting</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
import React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from '../styles/icon';
import {h, w, isIphoneX} from '../../constants';
import {incrementCounter, decrementCounter} from '../redux/actions';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      header: null,
      //title: 'Медитации',
      headerStyle: {
        backgroundColor: '#140d38',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: (
        <LinearGradient
          colors={[
            'rgba(20, 20, 52, 0.98)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(41, 37, 87, 1)',
          ]}
        />
      ),
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(41, 37, 87)'}}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <LinearGradient
          colors={[
            'rgba(41, 37, 87, 1)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(20, 20, 52, 0.98)',
          ]}
          style={{flex: 1}}>
          <View
            style={{
              // flex: 1,
              //marginTop: 34,
            //  marginLeft: 8,
              // backgroundColor: 'transparent',
              justifyContent: 'space-around',
              width: w,
              backgroundColor: 'red',
              // paddingLeft: 20,
              //paddingTop: 20,
              // paddingRight: 20,
              paddingTop: 44,
            }}>
            <View style={{flexDirection: 'row',marginBottom: 13, justifyContent: 'space-between', alignItems: 'center', paddingLeft: 20, paddingRight: 15}}>
              <Text
                style={{
                  //paddingBottom: 30,
                  // width: 90,
                  // height: 19,
                  color: '#f1f1f2',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 16,
                  // alignSelf: 'flex-start',
                  //backgroundColor:'red'
                }}>
                Медитации
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('MeditationScreen', {
                    //  dataSource: item,
                  })
                }>
                <Text
                  style={{
                    // width: 81,
                    // height: 14,
                    //marginBottom: 15,
                    // marginLeft: '40%',
                    color: '#9b9b9b',
                    fontFamily: 'SFUIText-Regular',
                    fontSize: 12,
                    // alignSelf: 'flex-end',
                  }}>
                  Смотреть все
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}
              data={DATA}
              renderItem={({item, index}) => (
                <View style={{overflow: 'hidden', width: 154, height: 133, marginRight: 12, borderRadius: 8}}>
                  <Image
                    style={styles.imagemed}
                    source={{uri: item.urls.small}}
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
                      Zindex: 2,
                    }}
                  >
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
                      {item.user.name}
                    </Text>
                  </LinearGradient>
                </View>
              )}
              keyExtractor={({id}, index) => id}
            />
          </View>
          <View
            style={{
              // flex: 1,
              //marginTop:20,
              //marginLeft: 8,
              //justifyContent: 'space-around',
              width: w,
              backgroundColor: 'gold',
              //paddingBottom:12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 0,
                //marginTop: 25,
                //marginBottom: 2,
              }}>
              <Text
                style={{
                  marginTop:25,
                  marginBottom:13,
                  width: 111,
                  height: 19,
                  color: '#f1f1f2',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 16,
                  alignSelf: 'flex-start',
                }}>
                SOS практики
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SosScreen', {
                    //  dataSource: item,
                  })
                }>
                <Text
                  style={{
                    marginTop:27,
                    width: 81,
                    height: 14,
                    marginBottom:16,
                    marginLeft: '30%',
                    color: '#9b9b9b',
                    fontFamily: 'SFUIText-Regular',
                    fontSize: 12,
                    alignSelf: 'flex-end',
                  }}>
                  Смотреть все
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
              }}
              data={DATA}
              renderItem={({item, index}) => (
                <View
                  style={{
                    width: 133,
                    height: 133,
                    marginRight: 12,
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}>
                  <Image
                    style={{
                      width: 133,
                      height: 133,
                      // marginLeft: 12,
                      justifyContent: 'center',
                    }}
                    source={{uri: item.urls.small}}
                  />
                  <LinearGradient
                    colors={[
                      'rgba(0, 0, 0, 0)',
                      'rgba(15, 12, 41, 0.33)',
                      'rgba(15, 12, 41, 0.9)',
                    ]}
                    style={{
                      // marginLeft:12,
                      position: 'absolute',
                      bottom: 0,
                      top: 0,
                      right: 0,
                      left: 0,
                      //borderRadius: 8,
                      Zindex: 2,
                    }}
                    >
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
                      {item.user.name}
                    </Text>
                  </LinearGradient>
                </View>
              )}
              keyExtractor={({id}, index) => id}
            />
          </View>
          <View
            style={{
              // flex: 1,
              //marginLeft: 8,
              backgroundColor: 'transparent',
              justifyContent: 'space-around',
              width: w,
              backgroundColor: 'transparent',
              paddingLeft: 20,
              paddingTop: 25,
              paddingRight: 20,
            }}>
            <View style={{flexDirection: 'row',marginBottom: 13,}}>
              <Text
                style={{
                  //paddingBottom: 30,
                  width: 151,
                  height: 19,
                  color: '#f1f1f2',
                  fontFamily: 'SFUIText-Regular',
                  fontSize: 16,
                  alignSelf: 'flex-start',
                  //backgroundColor:'red'
                }}>
                Мастер-классы
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('KouchScreen', {
                    //  dataSource: item,
                  })
                }>
                <Text
                  style={{
                    width: 81,
                    height: 14,
                    marginBottom: 2,
                    marginTop:3,
                    marginLeft: '20%',
                    color: '#9b9b9b',
                    fontFamily: 'SFUIText-Regular',
                    fontSize: 12,
                    alignSelf: 'flex-end',
                  }}>
                  Смотреть все
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              style={{flexDirection: 'row'}}
              data={DATA}
              renderItem={({item, index}) => (
                <View style={{}}>
                  <Image
                    style={styles.imagemed}
                    source={{uri: item.urls.small}}
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
                      width: 154,
                      height: 41,
                      //borderRadius: 8,
                      Zindex: 2,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 12,
                      width: 154,
                      height: '20%',
                      Zindex: 1,
                    }}>
                    <Text
                      style={{
                        width: 89.3,
                        height: 14,
                        marginLeft: 14,
                        fontSize: 12,
                        fontFamily: 'SFUIText-Regular',
                        color: '#ffffff',
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                      }}>
                      {item.user.name}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={({id}, index) => id}
            />
          </View>
        </LinearGradient>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingBottom:5,
            backgroundColor: '#2b264d',
            position: 'absolute',
            //  top: 0 ,
            //left: 0,
            height: h/14, // висота
            //width: 375,
            width: w,
            bottom: 0,
          }}>
          <TouchableOpacity
            style={{
              marginTop:12,
              width: w/3,
              //height: h/12,
              borderWidth:2,
              borderColor:'transparent',
              backgroundColor: '#2b264d',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Image
              source={Icon.HOMES}
              style={{width: 17, height: 17,borderColor:'#1488cc', tintColor: '#1488cc',marginBottom:5}}
            />
            <Text style={{width:125,height:10,fontFamily:'SFUIText-Regular',color:'#1488cc',fontSize:10,textAlign:'center'}}>Главная</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop:12,
              width: w/3,
              borderColor:'transparent',
              borderWidth:2,
              //height: '140%',
              backgroundColor: '#2b264d',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <Image
              source={Icon.USERHOME}
              style={{width: 15, height: 18,borderColor:'#1488cc',resizeMode: 'contain', tintColor: '#8a8a8f',marginBottom:5,}}
            />
            <Text style={{fontFamily:'SFUIText-Regular',letterSpacing:0.12, fontSize:10,textAlign:'center',marginBottom:5,color: '#8a8a8f',width:125,height:10}}>Профиль</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop:12,
              width: w/3,
              borderColor:'transparent',
              borderWidth:2,
              backgroundColor: '#2b264d',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Setting');
            }}>
            <Image
              source={Icon.FAVORITE}
              style={{borderColor:'#8a8a8f',width: 18.8, height: 16.7, tintColor: '#8a8a8f',marginBottom:5,}}
            />
            <Text style={{ width:125,height:10, fontFamily:'SFUIText-Regular',fontSize:10,letterSpacing:0.12,marginBottom:5,textAlign:'center',color: '#8a8a8f'}}>Избранное</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondcontainer: {
    flex: 1,
    paddingTop: 20,
  },
  touch: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemed: {
    width: 154,
    height: 133,
    //margin: 12,
    // marginRight: 12,
    //marginLeft:5,
    justifyContent: 'center',
  },
  image: {
    width: 154,
    height: 133,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 8,
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

function mapStateToProps(state) {
  return {
    counter: state.appData.get('counter'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter() {
      dispatch(incrementCounter());
    },
    decrementCounter() {
      dispatch(decrementCounter());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
