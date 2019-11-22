import React from 'react';
import { Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { h, w, isIphoneX } from '../../constants'
import Icon from '../styles/icon';

 export default class ProfileScreen extends React.Component {
   static navigationOptions = ({navigation, navigationOptions}) => {
     return {
       tabBarOptions: {
         labelStyle: {
           fontSize: 12,
         },
         tabStyle: {
           width: 10,
         },
         style: {
           //backgroundColor: 'red',
         },
       },
     };
   };
  render() {
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
              backgroundColor: 'rgb(46,33,80)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('Home');
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
              backgroundColor: 'rgb(24,12,53)',
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
      </SafeAreaView>
    );
  }
}
// import React from 'react';
// import { Button, View, Text, FlatList, StyleSheet, ActivityIndicator, Image,TouchableOpacity} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
//
//
// export default class ProfileScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//     };
//   }
//
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({isLoading: false});
//     }, 2000);
//   }
//
//   render() {
//     const {params} = this.props.navigation.state;
//
//     const dataSource = params ? params.dataSource : null;
//     console.log('this.state.dataSource ', dataSource);
//
//     return (
//       <View style={styles.detView}>
//         <Image style={styles.imageBig} source={{uri: dataSource.urls.full}} />
//         {this.state.isLoading && (
//           <View style={styles.active}>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//         )}
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   secondcontainer: {
//     flex: 1,
//     paddingTop: 20,
//   },
//   touch: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 160,
//     height: 220,
//     margin: 10,
//     justifyContent: 'center',
//   },
//   text: {
//     width: 100,
//     textAlign: 'center',
//   },
//   detView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageBig: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//   },
//   active: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
