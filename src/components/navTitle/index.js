import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class NavTitle extends React.Component {
  constructor (props) {
    super()
    this.state = {}
  }

  render() {
    const { title } = this.props
    return (
      <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>{title}</Text>
    );
  }
}