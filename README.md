# Venus App

## 配置
### 导航
* 导航 [react-navigation](https://github.com/react-navigation/react-navigation)

目前导航针对需登录的情况,在<code>root/src/route/index.js</code>中做了默认的路由设置 
如下：
<pre>
import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';
import React from 'react'
// app views
import HomeScreen from '../views/home'
import UserScreen from '../views/user'

// login & register views
import LoginScreen from '../views/login'

// tools views
import AuthLoadingScreen from '../views/tools/AuthLoadingScreen'

const AppStack = StackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen
  },
  {
    mode: 'modal',
    headerMode: 'none',
  });
const AuthStack = StackNavigator({ login: LoginScreen }, { mode: 'modal', headerMode: 'none' });

export default SwitchNavigator(
  {
    App: AppStack,
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
  }, {
    initialRouteName: 'AuthLoading'
  });
</pre>
### 启动页
* 启动页  [react-native-slpash-screen](https://github.com/crazycodeboy/react-native-splash-screen)

#### android 
*  替换 <code>root/android/app/src/main/res/drawable</code> 文件下的 <code>launch_screen.png</code> 资源 (注意资源尺寸的要求)
#### ios
* 打开 <code>root/ios/[APP_NAME]/Images.xcassets/LaunchImage(-[x]).launchimage</code> 下的 <code>Contents.json</code> 文件
* 根据 <code>Contents.json</code> 中对应的配置，替换filename中指向的对应资源文件(ps: 实例中资源并没有符合尺寸要求，替换时需注意要求的尺寸)
---
* 导航 react-navigation
* 字体图标(TODO)
* 数据流框架(TODO)
* http(TODO)
* 错误处理(TODO)
* UI(TODO)(可选)
