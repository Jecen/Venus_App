import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import RootStack from './route';
import serviceFun from './server/SomeTaskName';

export default class App extends Component {
  componentDidMount() {
    AppRegistry.registerHeadlessTask('SomeTaskName', () => serviceFun());
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return <RootStack />;
  }
}
