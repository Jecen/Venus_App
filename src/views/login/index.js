import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, AsyncStorage } from 'react-native';

export default class LoginScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static defaultProps = {
    navigation: {},
  }

  signOutAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          }}
      >
        <Text>Login Screen</Text>
        <Button title="Sign in!" onPress={this.signOutAsync} />
      </View>
    );
  }
}
