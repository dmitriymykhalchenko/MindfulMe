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
  Keyboard,
  StatusBar
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';
//import KeyboardSpacer from 'react-native-keyboard-spacer';

import {connect} from 'react-redux';
const IMAGE_HEIGHT =
  (h - (isIphoneX() ? 74 : 44) - (isIphoneX() ? 70 : 50)) / 3 - (19 + 25 + 13);

const IMAGE_WIDTH = (IMAGE_HEIGHT / 133) * 154;
export default class WriteComponent extends React.Component {
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
  // componentWillUnmount() {
  //     this.keyboardDidShowListener.remove();
  //     this.keyboardDidHideListener.remove();
  //   }
  //
  //   _keyboardDidShow() {
  //
  //   }
  //
  //   _keyboardDidHide() {
  //     alert('Keyboard Hidden');
  //   }
  //
  //   render() {
  //     return <TextInput onSubmitEditing={Keyboard.dismiss} />;
  //   }

  componentDidMount() {
    // this.keyboardDidShowListener = Keyboard.addListener(
    //   'keyboardDidShow',
    //   this._keyboardDidShow,
    // );
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
      <SafeAreaView style={{flex: 1, backgroundColor: '#302b63'}}>
      <StatusBar backgroundColor="#302b63" barStyle="light-content" />
      <StatusBar hidden={false}/>

        <LinearGradient
          colors={[
            '#302b63',
            'rgba(41, 37, 87, 1)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(20, 20, 52, 0.98)',
            'rgba(15, 12, 41, 0.98)',
          ]}
          style={{flex:1}}>

          <View
            style={{
              //flex:1/15,
              paddingLeft: 15,
              marginTop: 13,
              paddingBottom: 31,
              flexDirection: 'row',
              width: '85%',
              backgroundColor:'transparent',
              //  alignItems: 'stretch',
              // alignSelf:'stretch',
              justifyContent: 'space-between',
              //justifyContent:'center'
            }}>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              style={{
                //  width: 12, height: 7.4,
                paddingRight: '25%',
                justifyContent: 'flex-start',
              }}
              onPress={() => {
                this.props.backPressed();
              }}>
              <Image source={Icon.BACK} style={{tintColor: '#ffffff'}} />
            </TouchableOpacity>
            <Text
              style={{
                width: '60%',
                fontSize: 16,
                color: '#ffffff',
                fontFamily: 'SFUIText-Regular',
                textAlign: 'center',
                // width: 209,
                // height: 18,
              }}>
              Написать нам
            </Text>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              style={{width: 12, height: 7.4, marginRight: 14}}
              onPress={() => {
                //Keyboard.dismiss()
                // this.props.backPressed();
              }}>
              <Text
                style={{fontSize: 12, color: '#ffffff', width: 90, height: 18}}>
                Отправить
              </Text>
            </TouchableOpacity>
          </View>
          {/*title*/}
          <View style={{flexDirection: 'row',paddingTop:20,paddingBottom:12, paddingLeft: 31, backgroundColor:'#2b264d'}}>
            <Text
              style={{
                textAlign:'center',
                fontFamily: 'SFUIText-Light',
                fontSize: 16,
                color: 'rgba(255, 255, 255, 0.5)',
              }}>
              Кому:
            </Text>
            <Text

              style={{
                color: 'rgba(255, 255, 255, 0.65)',

                fontFamily:'SFUIText-Light',
                fontSize:16,
                textAlign:'center',
                //textAlign: 'center',
                // marginTop: 5,
                // marginLeft: 10,
                // marginRight: 10,
                // borderRadius: 5,
                //  borderColor: 'gray',
                //borderWidth: 0.5,
                backgroundColor: 'transparent',
              }}

            >  AppMindfulSpace@gmail.com</Text>
          </View>
          <View style={{flexDirection: 'row',
          paddingTop:12,paddingBottom:12, paddingLeft: 31,
           backgroundColor:'#2b264d'}}>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                // width: 53,
                // height: 24,
                fontFamily: 'SFUIText-Light',
                fontSize: 16,
              }}>
              Тема:
            </Text>
            <TextInput
              placeholder=""
              placeholderTextColor="#f9fafb"
              keyboardType="default"
              //editable={true}
              style={{
                width: 236,
                height: 24,
                fontSize: 16,
                textAlign: 'left',
                color: '#ffffff',
                // marginTop: 5,
                 marginLeft: 10,
                // marginRight: 10,
                // borderRadius: 5,
                //  borderColor: 'gray',
                //borderWidth: 0.5,
                backgroundColor: 'transparent',
              }}
              value={this.state.site}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 9,
              paddingHorizontal:30,
              paddingBottom:68,
              // paddingLeft: 30,
              // paddingRight:40,
              backgroundColor:'#2b264d'
              //justifyContent: 'space-between',
            }}>
            <TextInput
              autoFocus={true}
              placeholder="Сообщение:"
              placeholderTextColor="#f9fafb"
              keyboardType="default"
              editable={true}
              multiline={true}
              maxLength={360}
              numberOfLines={3}
              style={{
                fontSize: 16,
                textAlign: 'left',
                color: '#ffffff',
                fontFamily: 'SFUIText-Light',
                backgroundColor: 'transparent',
                width: '97%',
              }}
            />
{/*<TextInput
  autoFocus={true}
  placeholder="Сообщение:"
  placeholderTextColor="#f9fafb"
  keyboardType="default"
  editable={true}
  multiline={true}
  maxLength={360}
  numberOfLines={3}
  style={{
    fontSize: 16,
    textAlign: 'left',
    color: '#ffffff',
    fontFamily: 'SFUIText-Light',
    backgroundColor: 'transparent',
    width: '97%',
  }}
/>*/}

          </View>



          {/*
            <View>
                      <TextInput style={{left: 0, right: 0, height: "10%",paddingTop:'3%'
                      //   fontFamily:'SFUIText-Light', fontSize:16,paddingLeft:31,color:"#ffffff",
                      // justifyContent: 'center',
                      // alignItems:'center',
                      //  paddingTop:14,
                      //alignSelf:'center'
                      //paddingTop:13
                      }}
                            placeholder={'Сообщение:'}
                            placeholderTextColor="#f9fafb"
                            //placeholderStyle={{ fontFamily: "SFUIText-Light",fontSize:16,fontWeight:'300', textAlign:'center',color:"#ffffff",}}
                            />
                            </View>
            //           <View style={[{flex:2/1,justifyContent:'flex-end'}]}>
            //
            //
            //         <View style={{backgroundColor:'#2b264d',marginBottom:10,}}>
            //         <TextInput style={{left: 0, right: 0, height: "10%",paddingTop:'3%'
            //         //   fontFamily:'SFUIText-Light', fontSize:16,paddingLeft:31,color:"#ffffff",
            //         // justifyContent: 'center',
            //         // alignItems:'center',
            //       //  paddingTop:14,
            //         //alignSelf:'center'
            //         //paddingTop:13
            //       }}
            //               placeholder={'Сообщение:'}
            //               placeholderTextColor="#f9fafb"
            //               //placeholderStyle={{ fontFamily: "SFUIText-Light",fontSize:16,fontWeight:'300', textAlign:'center',color:"#ffffff",}}
            //               />
            //
            //         <KeyboardSpacer/>
            //         </View>
            // </View>

          // <View style={{flexDirection: 'row', marginTop: 192}}>
          //   <TextInput
          //     //onSubmitEditing={Keyboard.dismiss}
          //     placeholder="Сообщение:"
          //     placeholderTextColor="#f9fafb"
          //     //numberOfLines={5}
          //     numberOfLines={5}
          //     keyboardType="default"
          //     editable={true}
          //     style={{
          //       paddingLeft: 31,
          //       width: w,
          //       height: 48,
          //       fontFamily: 'SFUIText-Light',
          //       fontSize: 16,
          //       textAlign: 'left',
          //       color: '#ffffff',
          //       textAlignVertical: 'top',
          //       backgroundColor: '#2b264d',
          //     }}
          //   />
          // </View>

          //<View
          //   style={{
          //     //  flex: 3/1,
          //     marginTop: 34,
          //     marginLeft: 25,
          //     backgroundColor: 'transparent',
          //   }}>
          //   <View
          //     style={
          //       {
          //         // flexDirection: 'row',
          //         // flexWrap: 'wrap',
          //         // width: w / 2,
          //         // marginTop: 30,
          //         // padding: 20,
          //         // flexShrink: 2,
          //       }
          //     }>
          //     <TouchableOpacity>
          //       <Text
          //         style={{
          //           fontFamily: 'SFUIText-Light',
          //           fontSize: 16,
          //           color: '#ffffff',
          //         }}>
          //         Про MindfulMe
          //       </Text>
          //     </TouchableOpacity>
          //     <TouchableOpacity style={{paddingTop: 24, paddingBottom: 24}}>
          //       <Text
          //         style={{
          //           fontFamily: 'SFUIText-Light',
          //           fontSize: 16,
          //           color: '#ffffff',
          //         }}>
          //         Как использовать
          //       </Text>
          //     </TouchableOpacity>
          //     <TouchableOpacity>
          //       <Text
          //         style={{
          //           fontFamily: 'SFUIText-Light',
          //           fontSize: 16,
          //           color: '#ffffff',
          //         }}>
          //         Написать нам
          //       </Text>
          //     </TouchableOpacity>
          //   </View>
          //   <View
          //     style={{
          //       flexDirection: 'row',
          //       marginTop: 17,
          //     }}
          //   />
          // </View>
          */}
        </LinearGradient>
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
