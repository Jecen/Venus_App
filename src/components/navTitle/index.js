import React from 'react';
import propTypes from 'prop-types';
import { Text } from 'react-native';

export default class NavTitle extends React.Component {
  static propTypes = {
    title: propTypes.string,
  }

  static defaultProps = {
    title: '',
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <Text
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
    );
  }
}
