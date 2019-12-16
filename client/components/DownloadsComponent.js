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
  TextInput,
  StatusBar,
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

export default class DownloadsComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'HelpComponent',
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
        <StatusBar hidden={true} />
        <StatusBar backgroundColor="#302b63" barStyle="light-content" />
        <LinearGradient
          colors={[
            'rgba(41, 37, 87, 1)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(20, 20, 52, 0.98)',
            'rgba(15, 12, 41, 0.98)',
          ]}
          style={{flex: 1}}>
          <Image
            source={Icon.DOWNLOADLEAVES}
            style={{
              height:"100%",
              width: w,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: 'rgba(43,38,77,0.5)',
              //opacity: 0.12,
            }}
          />
          {/*<StatusBar backgroundColor="#302b63" barStyle="light-content" />*/}
          <StatusBar hidden={false} />
          <ScrollView>
            <View
              style={{
                paddingLeft: 15,
                marginTop: 33,
                //paddingBottom: 22,
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
                  width: 335,
                  height: 18,
                }}>
                Загруженные
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'stretch',
                backgroundColor: 'transparent',
                paddingTop: 13,
              }}>
              {/* title */}
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 13,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingRight: 15,
                }}>
                <Text style={styles.textMed}>Сеты</Text>
                <TouchableOpacity
                onPress={() => {
                  // this.props.navigation.navigate('Setting');
                  // this.setState({
                  //   MeditationScreen: true,
                  //   HomeScreen: false,
                  // });
                  this.props.downloadssetsScreen();
                }}
                >
                  <Text style={styles.textMedall}>Смотреть все</Text>
                </TouchableOpacity>

                {/*//<Image source={this.state.FavoriteScreen ?  Icon.HEARTNB : Icon.HEARTN } style={this.state.FavoriteScreen ? styles.imgProfOn : styles.imgProf} />*/}
                {/* <TouchableOpacity
              onPress={() =>
                navigation.navigate('MeditationScreen', {
                })
              }>
              <Text style={styles.textMedall}>Смотреть все</Text>
            </TouchableOpacity> */}
              </View>
              <FlatList
                horizontal={true}
                contentContainerStyle={styles.medcontentFlat}
                data={DATA}
                renderItem={({item, index}) => (
                  <View style={styles.viewMed}>
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
                      style={styles.medGrad}>
                      <Text style={styles.medText}>{item.user.name}</Text>
                    </LinearGradient>
                  </View>
                )}
                keyExtractor={({id}, index) => id}
              />
            </View>

            <View>
              <View style={styles.sosView}>
                <Text style={styles.sosText}>Аудиозаписи из сета</Text>
                <TouchableOpacity
                onPress={() => {
                  // this.props.navigation.navigate('Setting');
                  // this.setState({
                  //   MeditationScreen: true,
                  //   HomeScreen: false,
                  // });
                  this.props.downloadsaudioScreen();
                }}
                >
                  <Text style={styles.textSosmed}>Смотреть все</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*<View
            style={{
              //backgroundColor: 'rgba(43,38,77,0.5)',
               marginBottom: 1}}>
            <View
              style={{
                backgroundColor: 'rgba(43,38,77,0.5)',
                paddingLeft: 14,
                flexDirection: 'row',
                alignItems: 'center',
                //paddingBottom: isIphoneX() ? 20 : 0,
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
                    color:'#ababb6'
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
                    //borderBottomWidth:2.9,
                    tintColor: '#7ed321',
                  }}
                />
                <Text
                  style={{
                    fontSize:12,
                    fontWeight:'300',
                    marginLeft: 18,
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  Done
                </Text>
                <Text
                  style={{
                    fontSize:12,
                    fontWeight:'300',
                    marginLeft: 53,
                    color: '#ffffff',
                    fontFamily: 'SFUIText-Light',
                  }}>
                  10 min
                </Text>

                <TouchableOpacity>
                  <Image
                    source={Icon.DOWNLOADHEART}
                    style={{
                      width: 18,
                      height: 16,
                      marginLeft: 31,
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
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 12,
                  fontWeight:'300',
                  fontFamily: 'SFUIText-Light',
                  paddingBottom: 16,
                }}>
                Коллекция «Концентрация»
              </Text>
            </View>
          </View>*/}

            {/*<View
  style={{
    //backgroundColor: 'rgba(43,38,77,0.5)',
     marginBottom: 1,width:"100%"}}>
  <View
    style={{
      backgroundColor: 'rgba(43,38,77,0.5)',
      paddingLeft:  '4%',
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
          color:'#ababb6'
        }}>
        2
      </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        marginLeft: '2%',
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
          marginLeft: '5%',
          //borderBottomWidth:2.9,
          tintColor: '#7ed321',
        }}
      />
      <Text
        style={{
          fontSize:12,
          fontWeight:'300',
          marginLeft: '4%',
          color: '#ffffff',
          fontFamily: 'SFUIText-Light',
        }}>
        Done
      </Text>
      <Text
        style={{
          fontSize:12,
          fontWeight:'300',
          marginLeft: '15%',
          color: '#ffffff',
          fontFamily: 'SFUIText-Light',
        }}>
        5 min
      </Text>

      <TouchableOpacity>
        <Image
          source={Icon.DOWNLOADHEART}
          style={{
            // width: 18,
            // height: 16,
            marginLeft:'37%',
            tintColor: '#1488cc',
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
  <View
    style={{
      backgroundColor: 'rgba(43,38,77,0.5)',
      paddingLeft: '9%',
      justifyContent: 'flex-start',
    }}>
    <Text
      style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12,
        fontWeight:'300',
        fontFamily: 'SFUIText-Light',
        paddingBottom: 16,
      }}>
      Коллекция «Концентрация»
    </Text>
  </View>
</View>*/}

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
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  header: {flex: 1, backgroundColor: 'rgba(43,38,77,0.5)'},
  container: {
    flexDirection: 'row',
    marginBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  textFavor: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 10,
    letterSpacing: 0.12,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  textProf: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 10,
    letterSpacing: 0.12,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  imgProf: {
    width: 18.8,
    height: 16.7,
    tintColor: '#8a8a8f',
    marginBottom: 5,
  },
  touchProf: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 2,
    backgroundColor: 'rgba(43,38,77,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textProf: {
    fontFamily: 'SFUIText-Regular',
    letterSpacing: 0.12,
    fontSize: 10,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  homeImg: {
    width: 15,
    height: 18,
    borderColor: '#1488cc',
    resizeMode: 'contain',
    tintColor: '#8a8a8f',
    marginBottom: 5,
  },
  homeTouch: {
    flex: 1,
    backgroundColor: 'rgba(43,38,77,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeFootText: {
    fontFamily: 'SFUIText-Regular',
    color: '#1488cc',
    fontSize: 10,
    textAlign: 'center',
  },
  homeFootImg: {
    width: 17,
    height: 17,
    tintColor: '#1488cc',
    marginBottom: 5,
  },
  homeFoot: {
    flex: 1,
    backgroundColor: 'rgba(43,38,77,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFoot: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: isIphoneX() ? 20 : 0,
    backgroundColor: 'rgba(43,38,77,0.5)',
    height: isIphoneX() ? 70 : 50, // висота
    width: w,
  },
  masText: {
    position: 'absolute',
    left: 15,
    bottom: 12,
    fontSize: 12,
    fontFamily: 'SFUIText-Regular',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  masGrad: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  viewImgMas: {
    overflow: 'hidden',
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginRight: 12,
    borderRadius: 8,
  },
  masContentFlat: {
    paddingHorizontal: 20,
    paddingRight: 8,
    flexDirection: 'row',
  },
  textMasAll: {
    color: '#9b9b9b',
    fontFamily: 'SFUIText-Regular',
    fontSize: 12,
  },
  textMas: {
    color: '#f1f1f2',
    fontFamily: 'SFUIText-Regular',
    fontSize: 16,
  },
  viewTextMas: {
    flexDirection: 'row',
    marginBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  viewMas: {
    justifyContent: 'space-around',
    width: w,
    backgroundColor: 'transparent',
    paddingTop: 25,
  },
  sosTextEnd: {
    position: 'absolute',
    left: 15,
    bottom: 12,
    fontSize: 12,
    fontFamily: 'SFUIText-Regular',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  sosGrad: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  imgSos: {
    width: IMAGE_HEIGHT,
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
  },
  viewImgSos: {
    width: IMAGE_HEIGHT,
    height: IMAGE_HEIGHT,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  sosContentFlat: {
    paddingHorizontal: 20,
    paddingRight: 8,
    flexDirection: 'row',
  },
  textSosmed: {
    color: '#9b9b9b',
    fontFamily: 'SFUIText-Regular',
    fontSize: 12,
  },
  sosText: {
    color: '#f1f1f2',
    fontFamily: 'SFUIText-Regular',
    fontSize: 16,
  },
  sosView: {
    paddingTop: 25,
    flexDirection: 'row',
    marginBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  medText: {
    position: 'absolute',
    left: 15,
    bottom: 12,
    fontSize: 12,
    fontFamily: 'SFUIText-Regular',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  medGrad: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  viewMed: {
    overflow: 'hidden',
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginRight: 12,
    borderRadius: 8,
  },
  medcontentFlat: {
    paddingHorizontal: 20,
    paddingRight: 8,
    flexDirection: 'row',
  },
  textMedall: {
    color: '#9b9b9b',
    fontFamily: 'SFUIText-Regular',
    fontSize: 12,
    //width:81
  },
  textMed: {
    color: '#f1f1f2',
    fontFamily: 'SFUIText-Regular',
    fontSize: 16,
    //width:90
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
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
  },

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
