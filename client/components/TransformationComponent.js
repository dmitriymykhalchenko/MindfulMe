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
export default class TransformationComponent extends React.Component {
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
      heart1: true,
      heart2: false,
      heart3: false,
      heart4: false,
      heart5: false,
      
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
          source={Icon.APPLE}
          style={{
            width: w,
            height: h,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            //opacity: 0.12,
          }}
        />

        <View
          style={{
            paddingLeft: 15,
            marginTop: 33,
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
              Трансформация тела
            </Text>
          </View>
          <View style={{marginRight: 18}}>
            <Image source={Icon.INDEPENDENT} style={{tintColor: '#ffffff'}} />
          </View>
        </View>
        <ScrollView>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontFamily: 'SFUIText-Regular',
                fontSize: 14,
                textAlign: 'center',
                color: '#ffffff',
              }}>
              Научись осознаному питанию
            </Text>
          </View>

          <View
            style={{
              marginTop: 30,
              //backgroundColor: 'rgba(43,38,77,0.5)',
              marginBottom: 1,
              width: w,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({heart1: !this.state.heart1});
              }}
              //  console.log('this.state.heart - ', this.state.heart);
              style={
                {
                  //alignSelf: 'flex-end',
                  //  flex: 1,
                  //justifyContent: 'flex-end',
                  //marginLeft: 33,
                }
              }>
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
                  <View style={{flex:1, backgroundColor: 'transparent',flexDirection:'row'}}>
                    <Text
                      style={ [ styles.texttrack2, this.state.heart1 && styles.texttrack1 ]}>
                      Track One
                    </Text>
                    <Text
                      style={[ styles.textmin2, this.state.heart1 && styles.textmin1 ]}>
                      5 min
                    </Text>
                    {!this.state.heart1 && (
                      <Image
                        source={Icon.LOCK}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                    {this.state.heart1 && (
                      <Image
                        source={Icon.DOWNLOADHEART}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                  </View>




                </View>
              </View>
            </TouchableOpacity>

            {/*{this.state.heart1 && (
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
                  onPress={() => {
                    this.setState({heart1: !this.state.heart1});
                  }}
                  //  console.log('this.state.heart - ', this.state.heart);
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginLeft: 33,
                  }}>
                  {!this.state.heart1 && (
                    <Image
                      source={Icon.LOCK}
                      style={{
                        //backgroundColor:'#a3a3a3',
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        // //alignItems:'flex-start',
                        // alignSelf:'flex-start',
                        // width: 18,
                        // height: 16,
                        //marginLeft:31,
                        //color:'#a3a3a3',
                        //tintColor: '#a3a3a3',
                      }}
                    />
                  )}
                  {this.state.heart1 && (
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
                        //tintColor: '#1488cc',
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
)}*/}
          </View>

          <View
            style={{
            //  marginTop: 30,
              //backgroundColor: 'rgba(43,38,77,0.5)',
              marginBottom: 1,
              width: w,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({heart2: !this.state.heart2});
              }}
              //  console.log('this.state.heart - ', this.state.heart);
              style={
                {
                  //alignSelf: 'flex-end',
                  //  flex: 1,
                  //justifyContent: 'flex-end',
                  //marginLeft: 33,
                }
              }>
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
                  <View style={{flex:1, backgroundColor: 'transparent',flexDirection:'row'}}>
                    <Text
                      style={ [ styles.texttrack2, this.state.heart2 && styles.texttrack1 ]}>
                      Track Two
                    </Text>
                    <Text
                      style={[ styles.textmin2, this.state.heart2 && styles.textmin1 ]}>
                      10 min
                    </Text>
                    {!this.state.heart2 && (
                      <Image
                        source={Icon.LOCK}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                    {this.state.heart2 && (
                      <Image
                        source={Icon.DOWNLOADHEART}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                  </View>




                </View>
              </View>
            </TouchableOpacity>

            {/*{this.state.heart1 && (
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
                  onPress={() => {
                    this.setState({heart1: !this.state.heart1});
                  }}
                  //  console.log('this.state.heart - ', this.state.heart);
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginLeft: 33,
                  }}>
                  {!this.state.heart1 && (
                    <Image
                      source={Icon.LOCK}
                      style={{
                        //backgroundColor:'#a3a3a3',
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        // //alignItems:'flex-start',
                        // alignSelf:'flex-start',
                        // width: 18,
                        // height: 16,
                        //marginLeft:31,
                        //color:'#a3a3a3',
                        //tintColor: '#a3a3a3',
                      }}
                    />
                  )}
                  {this.state.heart1 && (
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
                        //tintColor: '#1488cc',
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
)}*/}
          </View>

          <View
            style={{
            //  marginTop: 30,
              //backgroundColor: 'rgba(43,38,77,0.5)',
              marginBottom: 1,
              width: w,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({heart3: !this.state.heart3});
              }}
              //  console.log('this.state.heart - ', this.state.heart);
              style={
                {
                  //alignSelf: 'flex-end',
                  //  flex: 1,
                  //justifyContent: 'flex-end',
                  //marginLeft: 33,
                }
              }>
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
                  <View style={{flex:1, backgroundColor: 'transparent',flexDirection:'row'}}>
                    <Text
                      style={ [ styles.texttrack2, this.state.heart3 && styles.texttrack1 ]}>
                      Track Three
                    </Text>
                    <Text
                      style={[ styles.textmin2, this.state.heart3 && styles.textmin1 ]}>
                      20 min
                    </Text>
                    {!this.state.heart3 && (
                      <Image
                        source={Icon.LOCK}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                    {this.state.heart3 && (
                      <Image
                        source={Icon.DOWNLOADHEART}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                  </View>




                </View>
              </View>
            </TouchableOpacity>

            {/*{this.state.heart1 && (
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
                  onPress={() => {
                    this.setState({heart1: !this.state.heart1});
                  }}
                  //  console.log('this.state.heart - ', this.state.heart);
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginLeft: 33,
                  }}>
                  {!this.state.heart1 && (
                    <Image
                      source={Icon.LOCK}
                      style={{
                        //backgroundColor:'#a3a3a3',
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        // //alignItems:'flex-start',
                        // alignSelf:'flex-start',
                        // width: 18,
                        // height: 16,
                        //marginLeft:31,
                        //color:'#a3a3a3',
                        //tintColor: '#a3a3a3',
                      }}
                    />
                  )}
                  {this.state.heart1 && (
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
                        //tintColor: '#1488cc',
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
)}*/}
          </View>
          <View
            style={{
            //  marginTop: 30,
              //backgroundColor: 'rgba(43,38,77,0.5)',
              marginBottom: 1,
              width: w,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({heart4: !this.state.heart4});
              }}
              //  console.log('this.state.heart - ', this.state.heart);
              style={
                {
                  //alignSelf: 'flex-end',
                  //  flex: 1,
                  //justifyContent: 'flex-end',
                  //marginLeft: 33,
                }
              }>
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
                  <View style={{flex:1, backgroundColor: 'transparent',flexDirection:'row'}}>
                    <Text
                      style={ [ styles.texttrack2, this.state.heart4 && styles.texttrack1 ]}>
                      Track Four
                    </Text>
                    <Text
                      style={[ styles.textmin2, this.state.heart4 && styles.textmin1 ]}>
                      30 min
                    </Text>
                    {!this.state.heart4 && (
                      <Image
                        source={Icon.LOCK}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                    {this.state.heart4 && (
                      <Image
                        source={Icon.DOWNLOADHEART}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                  </View>




                </View>
              </View>
            </TouchableOpacity>

            {/*{this.state.heart1 && (
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
                  onPress={() => {
                    this.setState({heart1: !this.state.heart1});
                  }}
                  //  console.log('this.state.heart - ', this.state.heart);
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginLeft: 33,
                  }}>
                  {!this.state.heart1 && (
                    <Image
                      source={Icon.LOCK}
                      style={{
                        //backgroundColor:'#a3a3a3',
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        // //alignItems:'flex-start',
                        // alignSelf:'flex-start',
                        // width: 18,
                        // height: 16,
                        //marginLeft:31,
                        //color:'#a3a3a3',
                        //tintColor: '#a3a3a3',
                      }}
                    />
                  )}
                  {this.state.heart1 && (
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
                        //tintColor: '#1488cc',
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
)}*/}
          </View>


          <View
            style={{
              //marginTop: 30,
              //backgroundColor: 'rgba(43,38,77,0.5)',
              marginBottom: 1,
              width: w,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({heart5: !this.state.heart5});
              }}
              //  console.log('this.state.heart - ', this.state.heart);
              style={
                {
                  //alignSelf: 'flex-end',
                  //  flex: 1,
                  //justifyContent: 'flex-end',
                  //marginLeft: 33,
                }
              }>
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
                  <View style={{flex:1, backgroundColor: 'transparent',flexDirection:'row'}}>
                    <Text
                      style={ [ styles.texttrack2, this.state.heart5 && styles.texttrack1 ]}>
                      Track Five
                    </Text>
                    <Text
                      style={[ styles.textmin2, this.state.heart5 && styles.textmin1 ]}>
                      10 min
                    </Text>
                    {!this.state.heart5 && (
                      <Image
                        source={Icon.LOCK}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                    {this.state.heart5 && (
                      <Image
                        source={Icon.DOWNLOADHEART}
                        style={{
                          //backgroundColor:'#a3a3a3',
                          resizeMode: 'cover',
                          justifyContent: 'flex-end',
                          // //alignItems:'flex-start',
                          // alignSelf:'flex-start',
                          // width: 18,
                          // height: 16,
                          //marginLeft:31,
                          //color:'#a3a3a3',
                          //tintColor: '#a3a3a3',
                        }}
                      />
                    )}
                  </View>




                </View>
              </View>
            </TouchableOpacity>

          </View>


        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  texttrack1:{
    width:'24%',
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'SFUIText-Regular'},
  texttrack2:{
    width:'24%',

    fontSize: 16,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'SFUIText-Regular',
  },
  textmin1:{
    height: 14,
    width: 41,
    fontSize: 12,
    fontWeight: '300',
    marginLeft: '32%',
    color: '#ffffff',
    fontFamily: 'SFUIText-Light'},
textmin2:{
  height: 14,
  width: 41,
  fontSize: 12,
  fontWeight: '300',
  marginLeft: '32%',
  color: 'rgba(255,255,255,0.7)',
  fontFamily: 'SFUIText-Light'

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
