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
import {incrementCounter, decrementCounter} from '../redux/actions';

import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import {connect} from 'react-redux';
const IMAGE_HEIGHT =
  (h - (isIphoneX() ? 74 : 44) - (isIphoneX() ? 70 : 50)) / 3 - (19 + 25 + 13);

const IMAGE_WIDTH = (IMAGE_HEIGHT / 286) * 132;
class FonComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'WriteComponent',
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <View
          style={{
            marginLeft: 20,
            marginBottom: 20,
            //paddingLeft: 15,
            marginTop: 15.5,
            //paddingBottom:31,
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
            Фон
          </Text>
        </View>

        <View
          style={{
            //  flex: 3/1,
            // marginTop: 34,
            //marginLeft: 24,
            backgroundColor: 'transparent',
          }}>
          <FlatList
            horizontal={true}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingRight: 8,
              flexDirection: 'row',
            }}
            data={DATA}
            renderItem={({item, index}) => (
              <View
                style={{
                  overflow: 'hidden',
                  // width: IMAGE_WIDTH,
                  // height: IMAGE_HEIGHT,
                  marginRight: 24,
                  //borderRadius: 8,
                }}>
                <Image
                  style={{
                    width: 132,
                    height: 286,
                    justifyContent: 'center',
                  }}
                  source={{uri: item.urls.small}}
                />
                <TouchableOpacity
                  style={{
                    width: 18,
                    position: 'absolute',
                    bottom: 139,
                    top: 129,
                    right: 58,
                    left: 56,
                    height: 18,
                    zIndex: 2,
                  }}
                  onPress={() => {}}>
                  <Image
                    source={Icon.DOWNLOAD}
                    style={{tintColor: '#ffffff'}}
                  />
                </TouchableOpacity>
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
                      left: 38,
                      right: 39,
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

          <View
            style={{
              marginTop: 56,
              marginLeft: 20,
              marginRight: 20,
              // flexDirection: 'row',
              // flexWrap: 'wrap',
              // width: w / 2,
              // marginTop: 30,
              // padding: 20,
              // flexShrink: 2,
            }}>
            <Slider
              minimumValue={1}
              maximumValue={100}
              step={4}
              thumbTintColor={'#1488cc'}
              customMinimumTrack={
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                    //  '#2b32b2', '#1488cc'
                  ]}
                  style={{
                    width: '100%',
                    //height: '100%',
                  }}
                />
              }
              customMaximumTrack={
                <LinearGradient
                  //colors={'#cdcdd2'}
                  style={{
                    width: '100%',
                    //height: '100%',
                  }}
                />
              }
            />
            <Text
              style={{
                fontFamily: 'SFUIText-Light',
                fontSize: 14,
                color: '#ffffff',
                //marginTop:16
              }}>
              Фоновый звук
            </Text>

            <View
              style={{
                marginTop: 54,
                //backgroundColor: 'white',
                // justifyContent: 'center',
                alignItems: 'stretch',
                flexDirection: 'row',
              }}>
              <View
                style={{}}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontFamily: 'SFUIText-Light',
                    fontSize: 16,
                    color: '#ffffff',
                    width: 172,
                  }}>
                  Продолжительность звука вне медитаций
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  style={{
                    marginLeft: 57,
                    width: 12,
                    height: 7.4,
                    marginRight: 5,

                  }}
                  onPress={() => {
                    this.props.decrementCounter();
                  }}>
                  <Image source={Icon.LEFT} style={{tintColor: '#ffffff',}} />
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'SFUIText-Regular',
                    color: '#ffffff',
                    justifyContent: 'center',

                    textAlign: 'center',
                    //margin: 20
                  }}>
                  {this.props.counter + '  мин.'}
                </Text>
                <TouchableOpacity
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                  style={{width: 12, height: 7.4, marginLeft: 5}}
                  onPress={() => {
                    this.props.incrementCounter();
                  }}>
                  <Image source={Icon.RIGHT} style={{tintColor: '#ffffff'}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 17,
            }}
          />
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
)(FonComponent);
