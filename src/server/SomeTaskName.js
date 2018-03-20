import { AsyncStorage } from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter' 

module.exports = async (data) => {
  // do stuff
  AsyncStorage.setItem('testTXT', data.currVolume + '', () => {
    RCTDeviceEventEmitter.emit('AsyncStorageUpdate', 'testTXT'); 
  });
  
};