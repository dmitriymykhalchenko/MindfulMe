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
export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'Медитации',
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(24,12,53)'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            margin: 5,
            backgroundColor: 'rgb(46,33,80)',
            position: 'absolute',
            //  top: 0 ,
            //left: 0,
            height: '10%', // висота
            width: '100%',
            bottom: 0,
          }}>
          <TouchableOpacity
            style={{
              width: '33%',
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
              width: '33%',
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
              width: '33%',
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
    width: 160,
    height: 220,
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    width: 100,
    textAlign: 'center',
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
