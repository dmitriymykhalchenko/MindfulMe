import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  ImageBackground,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {h, w, isIphoneX} from '../../constants';
import Icon from '../styles/icon';
import LinearGradient from 'react-native-linear-gradient';

export default class FavoriteComponent extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#f2f2f2',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerRight: <TouchableOpacity style={{height: 60, width: 60}} />,
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 10,
        },
        style: {
          backgroundColor: 'green',
        },
      },
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
    const {navigation} = this.props;

    return (
      <SafeAreaView
        style={{flex: 1, marginTop: -20, backgroundColor: 'rgb(24,12,53)'}}>
        <ImageBackground
          source={Icon.MINDSELF}
          style={{width: '100%', height: '100%',color:'rgba(0, 0, 0, 0.12)',tintColor:'rgba(0, 0, 0, 0.12)',backgroundColor:'rgba(0, 0, 0, 0.12)',}}>
          <LinearGradient
            colors={[
              '#302b63',
              'rgba(41, 37, 87, 1)',
              'rgba(34, 31, 75, 0.99)',
              'rgba(27, 25, 63, 0.99)',
              'rgba(20, 20, 52, 0.98)',
              'rgba(15, 12, 41, 0.98)',


            ]}
            style={{flex: 1}}>
            {/* section */}
            <View
              style={{
                paddingTop: isIphoneX() ? 63 : 33,
                //marginTop: 33,
                //marginBottom: 50,
                //flex: 1,
                //marginBottom:40,
                //  backgroundColor: 'white',
                alignItems: 'center',
              }}>
              <View style={{}}>
                <Text
                  style={{fontSize: 16,fontFamily:'SFUIText-Regular', textAlign: 'center', color: '#ffffff'}}>
                  Избранное
                </Text>
                </View>
                </View>
                </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
