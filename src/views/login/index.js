import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, AsyncStorage } from 'react-native';
import Message from '../../assets/tools/messageHandle';
import http from '../../http/index';

export default class LoginScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static defaultProps = {
    navigation: {},
  }

  login = async () => {
    const { navigate } = this.props.navigation;
    await AsyncStorage.setItem('userToken', 'abc');
    Message.tip('go to home');
    await http.post('/aaa/ccc');
    navigate('Home');
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
        <Button title="Sign in!" onPress={this.login} />
      </View>
    );
  }
}
