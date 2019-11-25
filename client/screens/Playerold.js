//
// import React from 'react';
// import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {h, w, isIphoneX} from '../../constants';
// import Icon from '../styles/icon';
// import { useTrackPlayerProgress } from 'react-native-track-player';//интервал для установки скорости
//
// import TrackPlayer from 'react-native-track-player';
//
//
//
// export default class PlayerScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => ({
//   //title: 'Player',
//   header: null,
//   tabBarComponent: () => null,
//   headerBackTitleVisible: false,
//   headerMode: 'none',
//   headerBackTitle: null,
//   headerStyle: {
//     backgroundColor: 'white'
//   },
//   headerTintColor: 'green',
//   headerTitleStyle: {
//     fontWeight: 'bold'
//   },
//   height: h
// });
// constructor(props) {
//   super(props);
//   this.state = {
//     trackTitle:[]
//   };
// }
// componentDidMount() {
//     // Adds an event handler for the playback-track-changed event
//     this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
//   console.log('track ', data);
//         const track = await TrackPlayer.getTrack(data.nextTrack);
//
//         this.setState({trackTitle: track.title});
//
//     });
// }
//
//
// componentWillUnmount() {
//     // Removes the event handler
//     this.onTrackChange.remove();
// }
//   render() {
//     return (
//       <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//         <View
//           style={{ marginTop: 30,width:'100%', flex: 1 / 5,backgroundColor: 'transparent', alignItems: 'space-around',justifyContent:'center',flexDirection:'row'}}>
//           <TouchableOpacity
//           style = {{backgroundColor:'transparent',marginLeft:'15%',justifyContent:'center',alignSelf:'center'}}>
//           <Image
//             source={Icon.USERPROFILE}
//             style={{
//               width: 130,
//               height: 130,
//               tintColor: 'gray',
//               backgroundColor: 'lightgray',
//               borderRadius: 75,
//               borderWidth: 25,
//               borderColor: 'lightgray',
//             }}
//           />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.proba()}
//             style={{
//               margin: 30,
//               alignSelf: 'flex-start',
//               justifyContent: 'center',
//               backgroundColor:"transparent"
//             }}>
//             <Image
//               source={Icon.DOWNLOAD}
//               style={{width: 20, height: 20, tintColor: 'black',alignItems:"flex-end",}}
//             />
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             justifyContent: 'center',
//             marginTop:10,
//             backgroundColor: 'transparent',
//             alignItems: 'center',
//           }}>
//           <Text style={{color: 'black',justifyContent:'center',alignSelf:'center', fontWeight: '700', fontSize: 14}}>
//             Full Name
//           </Text>
//
//           </View>
//
//
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//             backgroundColor: 'rgb(46,33,80)',
//             position: 'absolute',
//             //  top: 0 ,
//             //left: 0,
//             height: '10%', // висота
//             width: '100%',
//             bottom: 0,
//           }}>
//           <TouchableOpacity
//             style={{
//               width: '33%',
//               height: '140%',
//               backgroundColor: 'rgb(46,33,80)',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               this.props.navigation.navigate('Home');
//             }}>
//             <Image
//               source={Icon.HOMES}
//               style={{width: 24, height: 24, tintColor: 'white'}}
//             />
//             <Text style={{color: 'white'}}>Home!</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               width: '33%',
//               height: '140%',
//               backgroundColor: 'rgb(46,33,80)',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               this.props.navigation.navigate('Profile');
//             }}>
//             <Image
//               source={Icon.USERHOME}
//               style={{width: 24, height: 24, tintColor: 'white'}}
//             />
//             <Text style={{color: 'white'}}>Profile</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               width: '33%',
//               height: '140%',
//               backgroundColor: 'rgb(46,33,80)',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               this.props.navigation.navigate('Setting');
//             }}>
//             <Image
//               source={Icon.FAVORITE}
//               style={{width: 24, height: 24, tintColor: 'white'}}
//             />
//             <Text style={{color: 'white'}}>Setting</Text>
//             <Text>{this.state.trackTitle}</Text>
//           </TouchableOpacity>
//
//
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
import React, { useState } from "react";
import PropTypes from "prop-types";
import TrackPlayer, {

  usePlaybackState,
  useTrackPlayerEvents
} from "react-native-track-player";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from "react-native";

function ProgressBar() {
//  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{ flex: 10, backgroundColor: "red" }} />
      <View
        style={{
          flex: 5 - 10,
          backgroundColor: "grey"
        }}
      />
    </View>
  );
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState("");
  const [trackArtist, setTrackArtist] = useState("");
  useTrackPlayerEvents(["playback-track-changed"], async event => {
    console.log('event ', event );
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setTrackTitle(track.title);
      setTrackArtist(track.artist);
      setTrackArtwork(track.artwork);
    }
  });

  const { style, onNext, onPrevious, onTogglePlayback } = props;

  var middleButtonText = "Play";

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = "Pause";
  }

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton title={"<<"} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={">>"} onPress={onNext} />
      </View>
    </View>
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired
};

Player.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: "center",
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  progress: {
    height: 1,
    width: "90%",
    marginTop: 10,
    flexDirection: "row"
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
    marginVertical: 20,
    flexDirection: "row"
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center"
  }
});
