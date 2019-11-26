import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import Dashboard from './app/components/Dashboard/index';
import Landing from './app/components/Navigation/Navigation';
import SideBarCon from './app/components/DrawerNavigation/DrawerNavigation';
import Tasks from './app/components/MainActivities/Tasks/index';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Landing />
    </View>

  );
}

