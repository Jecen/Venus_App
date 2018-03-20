
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import RootStack from './route'

export default class App extends React.Component {

  componentDidMount() {
    AppRegistry.registerHeadlessTask('SomeTaskName', () => require('./server/SomeTaskName'));
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return <RootStack />;
  }
}
