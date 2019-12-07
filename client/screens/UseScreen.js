import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  StatusBar
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';


export default class UseScreen extends React.Component {
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
        <StatusBar hidden={true}/>
        <Image
          source={Icon.GREEN}
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
            paddingLeft:36,
            paddingRight:35,
            paddingTop: isIphoneX() ? 130 : 100,
            //alignItems: 'center',
          }}>
          <Text style={{fontFamily:'SFUIText-Semibold',fontWeight:'600',fontSize:16,color:'#ffffff'}}>Медитации</Text>
          <Text style={{marginTop:8,fontFamily:'SFUIText-Light',fontWeight:'300',fontSize:16,color:'rgba(255,255,255,0.8)'}}>Базовый инструмент повышения осознанности. Выбирайте подходящий Вам курс или настраивайте звуки и медитируйте самостоятельно. </Text>
        </View>
        <View
          style={{
            paddingLeft:36,
            paddingRight:35,
            paddingTop: 58,
            //alignItems: 'center',
          }}>
          <Text style={{fontFamily:'SFUIText-Semibold',fontWeight:'600',fontSize:16,color:'#ffffff'}}>SOS-практики</Text>
          <Text style={{marginTop:8,fontFamily:'SFUIText-Light',fontWeight:'300',fontSize:16,
          //lineHeight:1.44,
          color:'rgba(255,255,255,0.8)'}}>Помогут выйти из критического состояния или максимально подготовиться к предстоящей сложной ситуации.</Text>
        </View>
        <View
          style={{
            paddingLeft:36,
            paddingRight:35,
            paddingTop: 58,
            //alignItems: 'center',
          }}>
          <Text style={{fontFamily:'SFUIText-Semibold',fontWeight:'600',fontSize:16,color:'#ffffff'}}>Мастер-классы</Text>
          <Text style={{marginTop:8,fontFamily:'SFUIText-Light',fontWeight:'300',fontSize:16,
          //lineHeight:1.44,
          color:'rgba(255,255,255,0.8)'}}>Привнесите осознанность в Вашу жизнь и бизнес с вдохновляющими классами от топ-профессионалов и известных людей.</Text>
        </View>

        </LinearGradient>
      </SafeAreaView>
    );
  }
}
