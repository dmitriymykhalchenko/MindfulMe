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
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from '../styles/icon';
import {h, w, isIphoneX} from '../../constants';
import {incrementCounter, decrementCounter} from '../redux/actions';

import {connect} from 'react-redux';
class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      //title: 'Медитации',
      headerStyle: {
        backgroundColor: 'rgb(24,12,53)',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        flex: 1,
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(24,12,53)',}}>
      <View style = {{flex: 1/3.5, backgroundColor:'transparent',justifyContent:'space-around',}}>
      <Text style = {{marginLeft:20,paddingBottom:10,color:'white', fontSize:20}}>Медитации</Text>
      <FlatList
      horizontal={true}
      style ={{flexDirection:'row'}}
            data={DATA}
            renderItem={({item, index}) => (
              <View style={{}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('MeditationScreen', {
                      dataSource: item,
                    })
                  }>
                  <Image style={styles.image} source={{uri: item.urls.small}} />
                </TouchableOpacity>
                <Text style={styles.text}>{item.user.name}</Text>
              </View>
            )}
            keyExtractor={({id}, index) => id}
          />
      </View>
      <View style = {{flex: 1/3.5,marginTop:10, backgroundColor:'transparent',justifyContent:'space-around',}}>
      <Text style = {{marginLeft:20,paddingTop:5,paddingBottom:10,color:'white', fontSize:20}}>SOS прогрaммы</Text>
      <FlatList
      horizontal={true}
      style ={{flexDirection:'row'}}
            data={DATA}
            renderItem={({item, index}) => (
              <View style={{}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('SosScreen', {
                      dataSource: item,
                    })
                  }>
                  <Image style={styles.image} source={{uri: item.urls.small}} />
                </TouchableOpacity>
                <Text style={styles.text}>{item.user.name}</Text>
              </View>
            )}
            keyExtractor={({id}, index) => id}
          />
      </View>
      <View style = {{flex: 1/3.7,marginTop:10, justifyContent:'space-around',backgroundColor:'transparent'}}>
      <Text style = {{marginLeft:20,paddingTop:5,paddingBottom:10,color:'white', fontSize:20,}}>Коуч Сессии</Text>
      <FlatList
      horizontal={true}
      style ={{flexDirection:'row'}}
            data={DATA}
            renderItem={({item, index}) => (
              <View style={{}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('KouchScreen', {
                      dataSource: item,
                    })
                  }>
                  <Image style={styles.image} source={{uri: item.urls.small}} />
                </TouchableOpacity>
                <Text style={styles.text}>{item.user.name}</Text>
              </View>
            )}
            keyExtractor={({id}, index) => id}
          />
      </View>
        {/*<View
          style={{
            flex: 1/3,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{margin: 20, padding: 20, backgroundColor: 'lightblue'}}
            onPress={() => this.props.incrementCounter()}>
            <Text>+1</Text>
          </TouchableOpacity>

          <Text style={{margin: 20}}>{'Counter = ' + this.props.counter}</Text>

          <TouchableOpacity
            style={{margin: 20, padding: 20, backgroundColor: 'lightblue'}}
            onPress={() => this.props.decrementCounter()}>
            <Text>-1</Text>
          </TouchableOpacity>
        </View>*/}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',

            backgroundColor: 'rgb(46,33,80)',
            position: 'absolute',
            //  top: 0 ,
            //left: 0,
            height: '10%', // висота
            width: w,
            bottom: 0,
          }}>
          <TouchableOpacity
            style={{
              width: '34%',
              height: '140%',
              backgroundColor: 'rgb(24,12,53)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Image
              source={Icon.HOMES}
              style={{width: 24, height: 24, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Home!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '34%',
              height: '140%',
              backgroundColor: 'rgb(46,33,80)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <Image
              source={Icon.USERHOME}
              style={{width: 24, height: 24, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '34%',
              height: '140%',
              backgroundColor: 'rgb(46,33,80)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Setting');
            }}>
            <Image
              source={Icon.FAVORITE}
              style={{width: 24, height: 24, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Setting</Text>
          </TouchableOpacity>
        </View>
        {/*// <View style={styles.secondcontainer}>
      //   <FlatList
      //     data={DATA}
      //     renderItem={({item, index}) => (
      //       <View style={styles.touch}>
      //         <TouchableOpacity
      //           onPress={() =>
      //             this.props.navigation.navigate('Profile', {
      //               dataSource: item,
      //             })
      //           }>
      //           <Image style={styles.image} source={{uri: item.urls.small}} />
      //         </TouchableOpacity>
      //         <Text style={styles.text}>{item.user.name}</Text>
      //       </View>
      //     )}
      //     keyExtractor={({id}, index) => id}
      //   />
      // </View>*/}
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
  image: {
    width: 115,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    borderRadius:5,
  },
  text: {
    width: 100,
    textAlign: 'center',
    color:'white'
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
