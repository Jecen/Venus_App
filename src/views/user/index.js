import React from 'react';
import { View, Text } from 'react-native';

export default class UserScreen extends React.Component {
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