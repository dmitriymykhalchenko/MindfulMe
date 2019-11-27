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
} from 'react-native';
import {h, w, isIphoneX} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
const IMAGE_HEIGHT =
  (h - (isIphoneX() ? 74 : 44) - (isIphoneX() ? 70 : 50)) / 3 - (19 + 25 + 13);

const IMAGE_WIDTH = (IMAGE_HEIGHT / 133) * 154;

class HomeComponent extends React.Component {
  render() {
    const {navigation, dataSource} = this.props;
    const DATA = dataSource;
    console.log('IMAGE_HEIGHT - ', IMAGE_HEIGHT);

    return (
      <View>
        {/* section */}
        <View
          style={{
            alignSelf: 'stretch',
            backgroundColor: 'transparent',
            paddingTop: isIphoneX() ? 74 : 44,
          }}>
          {/* title */}
          <View style={styles.container}>
            <Text style={styles.textMed}>Медитации</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MeditationScreen', {
                })
              }>
              <Text style={styles.textMedall}>Смотреть все</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            contentContainerStyle={styles.medcontentFlat}
            data={DATA}
            renderItem={({item, index}) => (
              <View style={styles.viewMed}>
                <Image
                  style={styles.imagemed}
                  source={{uri: item.urls.small}}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={styles.medGrad}>
                  <Text style={styles.medText}>{item.user.name}</Text>
                </LinearGradient>
              </View>
            )}
            keyExtractor={({id}, index) => id}
          />
        </View>

        <View>
          <View style={styles.sosView}>
            <Text style={styles.sosText}>SOS практики</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SosScreen', {})}>
              <Text style={styles.textSosmed}>Смотреть все</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            //onLayout={e => console.log('onLayout - ', e.nativeEvent)}
            contentContainerStyle={styles.sosContentFlat}
            data={DATA}
            renderItem={({item, index}) => (
              <View style={styles.viewImgSos}>
                <Image style={styles.imgSos} source={{uri: item.urls.small}} />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={styles.sosGrad}>
                  <Text style={styles.sosTextEnd}>{item.user.name}</Text>
                </LinearGradient>
              </View>
            )}
            keyExtractor={({id}, index) => id}
          />
        </View>
        <View style={styles.viewMas}>
          <View style={styles.viewTextMas}>
            <Text style={styles.textMas}>Мастер-классы</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('KouchScreen', {})}>
              <Text style={styles.textMasAll}>Смотреть все</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            contentContainerStyle={styles.masContentFlat}
            data={DATA}
            renderItem={({item, index}) => (
              <View style={styles.viewImgMas}>
                <Image
                  style={styles.imagemed}
                  source={{uri: item.urls.small}}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(15, 12, 41, 0.33)',
                    'rgba(15, 12, 41, 0.9)',
                  ]}
                  style={styles.masGrad}>
                  <Text style={styles.masText}>{item.user.name}</Text>
                </LinearGradient>
              </View>
            )}
            keyExtractor={({id}, index) => id}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {flex: 1,
     backgroundColor: '#2b264d'
   },
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
  textProf: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 10,
    letterSpacing: 0.12,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  imgProf: {
    width: 18.8,
    height: 16.7,
    tintColor: '#8a8a8f',
    marginBottom: 5,
  },
  touchProf: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 2,
    backgroundColor: '#2b264d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textProf: {
    fontFamily: 'SFUIText-Regular',
    letterSpacing: 0.12,
    fontSize: 10,
    textAlign: 'center',
    color: '#8a8a8f',
  },
  homeImg: {
    width: 15,
    height: 18,
    borderColor: '#1488cc',
    resizeMode: 'contain',
    tintColor: '#8a8a8f',
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
  homeFootImg: {
    width: 17,
    height: 17,
    tintColor: '#1488cc',
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
  viewImgMas: {
    overflow: 'hidden',
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginRight: 12,
    borderRadius: 8,
  },
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
  imgSos: {
    width: IMAGE_HEIGHT,
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
  },
  viewImgSos: {
    width: IMAGE_HEIGHT,
    height: IMAGE_HEIGHT,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
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
  viewMed: {
    overflow: 'hidden',
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginRight: 12,
    borderRadius: 8,
  },
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
  imagemed: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
  },
});

export default HomeComponent;
