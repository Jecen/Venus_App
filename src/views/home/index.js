import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="管理员"
          onPress={() => navigate('user', {
            name: '管理员'
          })}
        />
        <Button
          title="游客"
          onPress={() => navigate('user', {
            name: '游客'
          })}
        />
      </View>
    );
  }
}