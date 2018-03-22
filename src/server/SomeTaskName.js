import { AsyncStorage } from 'react-native';
import eventHandle from '../assets/tools/eventEmiitter';

module.exports = async (data) => {
  AsyncStorage.setItem('testTXT', `${data.currVolume}`, () => {
    eventHandle.emit('AsyncStorageUpdate', 'testTXT');
  });
};
