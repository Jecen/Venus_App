
import React, { Component } from 'react';

import SplashScreen from 'react-native-splash-screen'
import RootStack from './route'

export default class App extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return <RootStack />;
  }
}
