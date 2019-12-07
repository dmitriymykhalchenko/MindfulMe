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
export default class LanguageComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'LanguageComponent',
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <View
          style={{
            paddingLeft: 15,
            marginTop: 13,
            paddingBottom: 22,
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
            Язык приложения
          </Text>
        </View>

        <View
          style={{
            //  flex: 3/1,
            //marginTop: 34,
            //marginLeft: 25,
            backgroundColor: 'transparent',
          }}>
          <View style={{}}>
            <View
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                flexDirection: 'row',
                marginTop: 9,
                //marginBottom:27,
                marginLeft: 40,
                marginRight: 40,
                justifyContent: 'space-between',
                backgroundColor: '#2b264d',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={
                  {
                    //paddingLeft:20,
                    //width:w, height:48,
                  }
                }
                onPress={() => {}}>
                <Text
                  style={{
                    fontWeight: '300',
                    marginTop: 12,
                    marginBottom: 12,
                    alignSelf: 'center',
                    color: '#f1f1f2',
                    height: 24,
                    width: 202,
                    fontSize: 16,
                    letterSpacing: 0.5,
                  }}>
                  Русский
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 100,
                  backgroundColor: '#1488cc',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Image
                  source={Icon.CHECK}
                  style={{
                    tintColor: '#ffffff',
                    alignSelf: 'center',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                flexDirection: 'row',
                marginTop: 20,
                //marginBottom:27,
                marginLeft: 40,
                marginRight: 40,
                justifyContent: 'space-between',
                backgroundColor: '#2b264d',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={
                  {
                    //paddingLeft:20,
                    //width:w, height:48,
                  }
                }
                onPress={() => {}}>
                <Text
                  style={{
                    fontWeight: '300',
                    marginTop: 12,
                    marginBottom: 12,
                    alignSelf: 'center',
                    color: '#f1f1f2',
                    height: 24,
                    width: 202,
                    fontSize: 16,
                    letterSpacing: 0.5,
                  }}>
                  English
                </Text>
              </TouchableOpacity>
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
