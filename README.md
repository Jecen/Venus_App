# Venus App

## 配置
### 启动页
* 启动页  [react-native-slpash-screen](https://github.com/crazycodeboy/react-native-splash-screen)

#### android 
*  替换 <code>root/android/app/src/main/res/drawable</code> 文件下的 <code>launch_screen.png</code> 资源 (注意资源尺寸的要求)
#### ios
* 替换 <code>root/ios/[APP_NAME]/Images.xcassets/LaunchImage.launchimage</code>中的<code>launch_screen.png</code>并打开各<code>*.launchimage</code>文件下的<code>Contents.json</code>核实filename是否指向了对应的资源名(ps: 实例中的资源并没有符合尺寸要求，替换时需注意要求的尺寸)
---
* 导航 react-navigation
* 字体图标(TODO)
* 数据流框架(TODO)
* http(TODO)
* 错误处理(TODO)
* UI(TODO)(可选)
