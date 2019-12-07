import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';


export default class MindScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      header: null,
      // title: 'MindScreen',
      // headerStyle: {
      //   backgroundColor: '#f2f2f2',
      //   elevation: 0,
      //   borderBottomWidth: 0,
      // },
      // headerTintColor: 'black',
      // headerTitleStyle: {
      //   flex: 1,
      //   textAlign: 'center',
      // },
      // headerRight: <TouchableOpacity style={{height: 60, width: 60}} />,
      // tabBarOptions: {
      //   labelStyle: {
      //     fontSize: 12,
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
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPass: true,
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
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, width:w,}}>

        <Image
          source={Icon.MINDSELF}
          style={{
            width:w,
            height:h,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          //  opacity: 0.12,
          }}
        />

        {/* section */}
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(13, 10, 39, 0.27)',
            'rgba(8, 6, 17, 0.91)',

          ]}
          style={{flex: 1}}>
        <View
          style={{
            paddingTop: isIphoneX() ? 211 : 181,
            alignItems: 'center',
          }}>
          <Text style={{fontFamily:'SFUIText-Semibold',fontSize:26,color:'#ffffff'}}>MindSelf</Text>
        </View>
        <View style={{marginTop:168,justifyContent:'center',
        marginLeft:36,marginRight:35
        }}>
        <Text style={{fontFamily:'SFUIText-Semibold',fontSize:16,color:'#ffffff',alignSelf:'center'}}>
        Наша миссия – помогать Вам, развивая навыки осознанности, улучшить качество Вашей жизни:
        </Text>
        <Text style={{fontFamily:'SFUIText-Semibold',fontSize:16,color:'#ffffff',marginTop:24}}>	• 	обрести эмоциональную ясность  </Text>
        <Text style={{fontFamily:'SFUIText-Semibold',fontSize:16,color:'#ffffff',marginTop:10}}>	• 	увидеть свободу выбора</Text>
        <Text style={{fontFamily:'SFUIText-Semibold',fontSize:16,color:'#ffffff',marginTop:10}}>	• 	становиться сильнее, спокойнее </Text>
        <Text style={{fontFamily:'SFUIText-Semibold',fontSize:16,color:'#ffffff',paddingLeft:24,}}>и счастливее</Text>

        </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
