import React from 'react';
import { StyleSheet, StatusBar, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import Landing from './app/components/Navigation/Navigation';
import * as Font from 'expo-font';
import LogRepair from './app/components/MainActivities/RepairRequest/LogRepair/index';


const { width, height } = Dimensions.get('window')
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'ptsans-bold': require('./assets/fonts/PTSans-Bold.ttf'),
      'ptsans-regular': require('./assets/fonts/PTSans-Regular.ttf'),
      'redhattext-bold': require('./assets/fonts/RedHatText-Bold.ttf')
    });
    this.setState({
      fontsLoaded: true
    })
  }
  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <Landing />
        </View>

      );
    } else {
      return (
        <View style={{ alignItems: "center", height: '100%', justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

  }

}


