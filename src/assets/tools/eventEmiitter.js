import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

const emit = (type, value) => {
  RCTDeviceEventEmitter.emit(type, value);
};

const on = (type, cb) => {
  RCTDeviceEventEmitter.addListener(type, cb);
};

export default {
  emit,
  on,
};
