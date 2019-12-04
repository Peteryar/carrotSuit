import React from 'react';
import { StyleSheet, StatusBar, Text, View, ActivityIndicator } from 'react-native';
import Landing from './app/components/Navigation/Navigation';
import * as Font from 'expo-font';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
       <Landing />
      </View>

    );
  }

}


