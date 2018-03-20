import React from 'react';
import { View, Text } from 'react-native';
import NavTitle from '../../components/navTitle'

export default class UserScreen extends React.Component {

  static navigationOptions = {
    title: 'User',
    headerTitle: <NavTitle title='User' />,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : '未知';

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{name} Screen</Text>
      </View>
    );
  }
}