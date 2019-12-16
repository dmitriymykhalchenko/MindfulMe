import React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from '../styles/icon';
import {h, w, isIphoneX} from '../../constants';
import {incrementCounter, decrementCounter} from '../redux/actions';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';

import HomeComponent from '../components/HomeComponent';
import ProfileComponent from '../components/ProfileComponent';
import FavoriteComponent from '../components/FavoriteComponent';
import MeditationComponent from '../components/MeditationComponent';
import SosComponent from '../components/SosComponent';
import MasterComponent from '../components/MasterComponent';
import HelpComponent from '../components/HelpComponent';
import WriteComponent from '../components/WriteComponent';
import FonComponent from '../components/FonComponent';
import InfoaccComponent from '../components/InfoaccComponent';
import LanguageComponent from '../components/LanguageComponent';
import DownloadsComponent from '../components/DownloadsComponent';
import DownloadssetsComponent from '../components/DownloadssetsComponent';
import DownloadsaudioComponent from '../components/DownloadsaudioComponent';

// const IMAGE_HEIGHT =
//   (h - (isIphoneX() ? 74 : 44) - (isIphoneX() ? 70 : 50)) / 3 - (19 + 25 + 13);
//
// const IMAGE_WIDTH = (IMAGE_HEIGHT / 133) * 154;

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      header: null,
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],

      homeScreen: true,
      profileScreen: false,
      favoriteScreen: false,
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
    // console.log('IMAGE_HEIGHT - ', IMAGE_HEIGHT);

    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="light-content" barStyle="light-content" />
        <LinearGradient
          colors={[
            'rgba(41, 37, 87, 1)',
            'rgba(34, 31, 75, 0.99)',
            'rgba(27, 25, 63, 0.99)',
            'rgba(20, 20, 52, 0.98)',
          ]}
          style={{flex: 1}}>
          {this.state.homeScreen && (
            <HomeComponent
              navigation={navigation}
              dataSource={this.state.dataSource}
              onAllMeditationPressed={() => {
                this.setState({
                  homeScreen: false,
                  meditationScreen: true,
                });
              }}
              onAllSosPressed={() => {
                this.setState({
                  homeScreen: false,
                  SosScreen: true,
                });
              }}
              onAllMasterPressed={() => {
                this.setState({
                  homeScreen: false,
                  masterScreen: true,
                });
              }}
            />
          )}

          {this.state.profileScreen && (
            <ProfileComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  homeScreen: true,
                  profileScreen: false,
                });
              }}
              helpScreen={() => {
                this.setState({
                  profileScreen: false,
                  helpScreen: true,
                });
              }}

              fonScreen={() => {
                this.setState({
                  profileScreen: false,
                  fonScreen: true,
                });
              }}
              downloadsScreen={() => {
                this.setState({
                  profileScreen: false,
                  downloadsScreen: true,
                });
              }}
              infoaccScreen={() => {
                this.setState({
                  profileScreen: false,
                  infoaccScreen: true,
                });
              }}
            />
          )}

          {this.state.downloadsScreen && (
            <DownloadsComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  profileScreen: true,
                  downloadsScreen: false,
                });
              }}
              downloadsaudioScreen={() => {
                this.setState({
                  downloadsScreen: false,
                  downloadsaudioScreen: true,
                });
              }}
              downloadssetsScreen={() => {
                this.setState({
                  downloadsScreen: false,
                  downloadssetsScreen: true,
                });
              }}
            />
          )}

          {this.state.downloadsaudioScreen && (
            <DownloadsaudioComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  downloadsScreen: true,
                  downloadsaudioScreen: false,
                });
              }}
            />
          )}
          {this.state.downloadssetsScreen && (
            <DownloadssetsComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  downloadsScreen: true,
                  downloadssetsScreen: false,
                });
              }}
            />
          )}


          {this.state.fonScreen && (
            <FonComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  profileScreen: true,
                  fonScreen: false,
                });
              }}
            />
          )}
          {this.state.languageScreen && (
            <LanguageComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  infoaccScreen: true,
                  languageScreen: false,
                });
              }}
            />
          )}

          {this.state.infoaccScreen && (
            <InfoaccComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  profileScreen: true,
                  infoaccScreen: false,
                });
              }}
              languageScreen={() => {
                this.setState({
                  infoaccScreen: false,
                  languageScreen: true,
                });
              }}
            />
          )}

          {this.state.helpScreen && (
            <HelpComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  profileScreen: true,
                  helpScreen: false,
                });
              }}

              writeScreen={() => {
                this.setState({
                  helpScreen: false,
                  writeScreen: true,
                })
              }}
            />
          )}
          {/*// <View style={{height: 200, width: 200, backgroundColor: 'green'}} />*/}

          {this.state.writeScreen && (
            <WriteComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  helpScreen: true,
                  writeScreen: false,
                });
              }}
            />
          )}

          {this.state.favoriteScreen && (
            <FavoriteComponent navigation={navigation} />
          )}

          {this.state.meditationScreen && (
            <MeditationComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  homeScreen: true,
                  meditationScreen: false,
                });
              }}
            />
          )}
          {this.state.SosScreen && (
            <SosComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  homeScreen: true,
                  SosScreen: false,
                });
              }}
            />
          )}

          {this.state.masterScreen && (
            <MasterComponent
              navigation={navigation}
              backPressed={() => {
                this.setState({
                  homeScreen: true,
                  masterScreen: false,
                });
              }}
            />
          )}

        </LinearGradient>

        {/*Footer*/}
        <View style={styles.viewFoot}>
          <TouchableOpacity
            style={styles.homeFoot}
            onPress={() => {
              this.setState({
                homeScreen: true,
                profileScreen: false,
                favoriteScreen: false,
                meditationScreen: false,
                SosScreen: false,
                masterScreen: false,
                helpScreen: false,
                writeScreen: false,
                fonScreen: false,
                infoaccScreen:false,
                languageScreen:false,
                downloadsScreen:false,
                downloadsaudioScreen:false,
                downloadssetsScreen:false,
              }); //clean on HomeScreen
              // this.props.navigation.navigate('homeScreen');
            }}>
            <Image
              source={Icon.HOMES}
              style={
                this.state.homeScreen
                  ? styles.homeFootImg
                  : styles.homeFootImgOn
              }
            />
            <Text
              style={
                this.state.homeScreen
                  ? styles.homeFootText
                  : styles.homeFootTextOn
              }>
              Главная
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeTouch}
            onPress={() => {
              this.setState({
                homeScreen: false,
                profileScreen: true,
                favoriteScreen: false,
                meditationScreen: false,
                SosScreen: false,
                masterScreen: false,
                helpScreen: false,
                writeScreen: false,
                fonScreen: false,
                infoaccScreen:false,
                languageScreen:false,
                downloadsScreen:false,
                downloadsaudioScreen:false,
                downloadssetsScreen:false,


              });
              // this.props.navigation.navigate('Profile');
            }}>
            <Image
              source={
                this.state.profileScreen ? Icon.USERHOMEBLUE : Icon.USERHOME
              }
              style={
                this.state.profileScreen ? styles.homeImgOn : styles.homeImg
              }
            />
            <Text
              style={
                this.state.profileScreen ? styles.textProf : styles.textProfOn
              }>
              Профиль
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchProf}
            onPress={() => {
              // this.props.navigation.navigate('Setting');
              this.setState({
                homeScreen: false,
                profileScreen: false,
                favoriteScreen: true,
                meditationScreen: false,
                SosScreen: false,
                masterScreen: false,
                helpScreen: false,
                writeScreen: false,
                fonScreen: false,
                infoaccScreen:false,
                languageScreen:false,
                downloadsScreen:false,
                downloadsaudioScreen:false,
                downloadssetsScreen:false,


              });
            }}>
            <Image
              source={this.state.favoriteScreen ? Icon.HEARTNB : Icon.HEARTN}
              style={
                this.state.favoriteScreen ? styles.imgProfOn : styles.imgProf
              }
            />
            <Text
              style={
                this.state.favoriteScreen
                  ? styles.textFavorOn
                  : styles.textFavor
              }>
              Избранное
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {flex: 1, backgroundColor: '#2b264d'},
  container: {
    flexDirection: 'row',
    marginBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  textFavor: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 10,
    letterSpacing: 0.12,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  textFavorOn: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 10,
    letterSpacing: 0.12,
    textAlign: 'center',
    color: '#1488cc',
  },

  textProf: {
    fontFamily: 'SFUIText-Regular',
    color: '#1488cc',
    fontSize: 10,
    textAlign: 'center',
    //letterSpacing: 0.12,
  },
  textProfOn: {
    fontFamily: 'SFUIText-Regular',
    color: '#9b9b9b',
    fontSize: 10,
    textAlign: 'center',
    //letterSpacing: 0.12,
  },

  // textProf: {
  //   fontFamily: 'SFUIText-Regular',////////////////
  //   fontSize: 10,
  //   letterSpacing: 0.12,
  //   textAlign: 'center',
  //  //color: '#8a8a8f',
  //   tintColor: '#8a8a8f'
  // },
  // textProfOn: {
  //   fontFamily: 'SFUIText-Regular',
  //   fontSize: 10,
  //   letterSpacing: 0.12,
  //   textAlign: 'center',
  //   tintColor: '#1488cc',
  //    //color: '#1488cc',
  // },
  imgProf: {
    width: 18.8,
    height: 16.7,
    tintColor: '#8a8a8f',
    marginBottom: 5,
  },
  imgProfOn: {
    width: 18.8,
    height: 16.7,
    tintColor: '#1488cc',
    marginBottom: 5,
    //borderWidth:2,
    //borderColor:'#1488cc',
    //backgroundColor:'#1488cc',
  },
  touchProf: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 2,
    backgroundColor: '#2b264d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // touchProfOn: {
  //   flex: 1,
  //   borderColor: 'transparent',
  //   borderWidth: 2,
  //   backgroundColor: '#1488cc',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  textProfOn: {
    fontFamily: 'SFUIText-Regular',
    letterSpacing: 0.12,
    fontSize: 10,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  homeImg: {
    width: 15,
    height: 18,
    // borderColor: '#1488cc',
    resizeMode: 'contain',
    tintColor: '#8a8a8f',
    marginBottom: 5,
  },
  homeImgOn: {
    width: 15,
    height: 18,
    //backgroundColor: '#1488cc',
    resizeMode: 'contain',
    tintColor: '#1488cc',
    marginBottom: 5,
  },
  homeTouch: {
    flex: 1,
    backgroundColor: '#2b264d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeFootText: {
    fontFamily: 'SFUIText-Regular',
    color: '#1488cc',
    fontSize: 10,
    textAlign: 'center',
  },
  homeFootTextOn: {
    fontFamily: 'SFUIText-Regular',
    color: '#9b9b9b',
    fontSize: 10,
    textAlign: 'center',
  },
  homeFootImg: {
    width: 17,
    height: 17,
    tintColor: '#1488cc',
    marginBottom: 5,
  },
  homeFootImgOn: {
    width: 17,
    height: 17,
    tintColor: '#9b9b9b',
    marginBottom: 5,
  },

  homeFoot: {
    flex: 1,
    backgroundColor: '#2b264d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFoot: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: isIphoneX() ? 20 : 0,
    backgroundColor: '#2b264d',
    height: isIphoneX() ? 70 : 50, // висота
    width: w,
  },
  masText: {
    position: 'absolute',
    left: 15,
    bottom: 12,
    fontSize: 12,
    fontFamily: 'SFUIText-Regular',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  masGrad: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  // viewImgMas:{
  //   overflow: 'hidden',
  //   width: IMAGE_WIDTH,
  //   height: IMAGE_HEIGHT,
  //   marginRight: 12,
  //   borderRadius: 8,
  // },
  masContentFlat: {
    paddingHorizontal: 20,
    paddingRight: 8,
    flexDirection: 'row',
  },
  textMasAll: {
    color: '#9b9b9b',
    fontFamily: 'SFUIText-Regular',
    fontSize: 12,
  },
  textMas: {
    color: '#f1f1f2',
    fontFamily: 'SFUIText-Regular',
    fontSize: 16,
  },
  viewTextMas: {
    flexDirection: 'row',
    marginBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  viewMas: {
    justifyContent: 'space-around',
    width: w,
    backgroundColor: 'transparent',
    paddingTop: 25,
  },
  sosTextEnd: {
    position: 'absolute',
    left: 15,
    bottom: 12,
    fontSize: 12,
    fontFamily: 'SFUIText-Regular',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  sosGrad: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  // imgSos:{
  //   width: IMAGE_HEIGHT,
  //   height: IMAGE_HEIGHT,
  //   justifyContent: 'center',
  // },
  // viewImgSos:{
  //   width: IMAGE_HEIGHT,
  //   height: IMAGE_HEIGHT,
  //   marginRight: 12,
  //   borderRadius: 8,
  //   overflow: 'hidden',
  // },
  sosContentFlat: {
    paddingHorizontal: 20,
    paddingRight: 8,
    flexDirection: 'row',
  },
  textSosmed: {
    color: '#9b9b9b',
    fontFamily: 'SFUIText-Regular',
    fontSize: 12,
  },
  sosText: {
    color: '#f1f1f2',
    fontFamily: 'SFUIText-Regular',
    fontSize: 16,
  },
  sosView: {
    paddingTop: 25,
    flexDirection: 'row',
    marginBottom: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  medText: {
    position: 'absolute',
    left: 15,
    bottom: 12,
    fontSize: 12,
    fontFamily: 'SFUIText-Regular',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  medGrad: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  // viewMed: {
  //   overflow: 'hidden',
  //   width: IMAGE_WIDTH,
  //   height: IMAGE_HEIGHT,
  //   marginRight: 12,
  //   borderRadius: 8,
  // },
  medcontentFlat: {
    paddingHorizontal: 20,
    paddingRight: 8,
    flexDirection: 'row',
  },
  textMedall: {
    color: '#9b9b9b',
    fontFamily: 'SFUIText-Regular',
    fontSize: 12,
  },
  textMed: {
    color: '#f1f1f2',
    fontFamily: 'SFUIText-Regular',
    fontSize: 16,
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
  // imagemed: {
  //   width: IMAGE_WIDTH,
  //   height: IMAGE_HEIGHT,
  //   justifyContent: 'center',
  // },
  // text: {
  //   width: 100,
  //   textAlign: 'center',
  //   color: 'white',
  // },
  // detView: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // imageBig: {
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: 'center',
  // },
  // active: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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
