import { AsyncStorage } from 'react-native';
import TFetch, { HttpError } from 'tfetch'; // https://www.npmjs.com/package/tfetch
import eventHandle from '../assets/tools/eventEmiitter';
import Messager from '../assets/tools/messageHandle';
import errorMap from './errorMap.json';

const BASE_URL = '/api';
const MAX_WATTING_TIME = 10000;

const http = new TFetch({
  //   before: [], // 后置钩子(钩子数组)  req
  //   after: [], // 前置钩子(钩子数组)  rsp
  baseUrl: BASE_URL,
  timeout: MAX_WATTING_TIME,
  //   errorCodeKey: 'errorCode', // 可选，启用token失效拦截时使用
  //   tokenExpireCode: 'LOGOUT', // 可选，启用token失效拦截时使用
  //   conf: { // custom fetch opt
  //     headers: {},
  //   },
});


http.onError((httpError) => {
  if (httpError.code === 'TOKEN_EXPIRE') {
    // token 失效 handle
    AsyncStorage.setItem('userToken', '', () =>
      eventHandle.emit('TOKEN_EXPIRE'));
  }

  Messager.httpError(errorMap[httpError.code]);

  return false;
});

http.injectAfter((rsp) => {
  const { success } = rsp;
  if (!success) {
    const { error: { code, message } } = rsp;
    return new HttpError({
      code,
      httpStatus: 602, // 服务器返回的错误
      message: message || errorMap[code] || '后台返回未知错误',
    });
  }
  return rsp;
});


export default http;
