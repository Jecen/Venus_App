import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { createIconSet } from 'react-native-vector-icons';
import NavTitle from '../../components/navTitle';
import iconMap from '../../assets/font/iconfontMap.json';
import eventHandle from '../../assets/tools/eventEmiitter';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: <NavTitle title="Home" />,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  static propTypes = {
    navigation: PropTypes.object,
  }

  static defaultProps = {
    navigation: {},
  }

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.listener = eventHandle.on('AsyncStorageUpdate', (value) => {
      // 接受到通知后的处理
      if (value === 'testTXT') {
        this.bootstrapAsync();
      }
    });
  }

  signOutAsync = async () => {
    await AsyncStorage.clear();
    const { navigate } = this.props.navigation;
    navigate('Auth');
  };

  bootstrapAsync = async () => {
    const testTXT = await AsyncStorage.getItem('testTXT');
    this.setState({
      name: testTXT || '-',
    });
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  render() {
    const { navigate } = this.props.navigation;
    const fontMap = iconMap;
    const IconFont = createIconSet(fontMap, 'iconfont');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen {this.state.name}</Text>
        <Button
          title="管理员"
          onPress={() =>
            navigate('User', {
              name: '管理员',
            })
          }
        />
        <Button
          title="游客"
          onPress={() =>
            navigate('User', {
              name: '游客',
            })
          }
        />
        <IconFont name="text" color="#113378" />
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
      </View>
    );
  }
}
