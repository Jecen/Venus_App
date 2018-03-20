import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

export default class LoginScreen extends React.Component {

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text>Login Screen</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}