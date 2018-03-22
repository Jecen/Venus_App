import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import NavTitle from '../../components/navTitle'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HomeScreen extends React.Component {
  constructor () {
    super();
    this.state = {
      name: ''
    }
  }

  static navigationOptions = {
    title: 'Home',
    headerTitle: <NavTitle title='Home' />,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _bootstrapAsync = async () => {
    const testTXT = await AsyncStorage.getItem('testTXT');
    this.setState({
      name: testTXT ? testTXT : '-'
    })
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  componentDidMount() {
    this.listener = RCTDeviceEventEmitter.addListener('AsyncStorageUpdate', (value) => {
      // 接受到通知后的处理
      if (value === 'testTXT') {
        this._bootstrapAsync()
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen {this.state.name}</Text>
        <Button
          title="管理员"
          onPress={() => navigate('User', {
            name: '管理员'
          })}
        />
        <Button
          title="游客"
          onPress={() => navigate('User', {
            name: '游客'
          })}
        />
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
        </Icon.Button>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
}