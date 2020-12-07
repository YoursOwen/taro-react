import Taro from '@tarojs/taro'
import { pageToLogin } from '@/utils/http'
import { HTTP_STATUS } from './config'

const requestInterceptors = function (chain) {
  let requestParams = chain.requestParams
  requestParams.headers = { ...requestParams.requestParams }
  let Token =
    requestParams.headers['X-BfcMall-Token'] || Taro.getStorageSync('token')
  requestParams.headers['X-BfcMall-Token'] = Token
  return chain.proceed(requestParams)
}

const responseInterceptor = (chain) => {
  const requestParams = chain.requestParams

  return chain.proceed(requestParams).then((res) => {
    console.log(
      '🚀 ~ file: interceptors.js ~ line 18 ~ returnchain.proceed ~ res',
      res
    )

    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject('请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject('服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      Taro.setStorageSync('X-BfcMall-Token', '')
      pageToLogin()
      // TODO 根据自身业务修改
      return Promise.reject('没有权限访问')
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      Taro.setStorageSync('X-BfcMall-Token', '')
      pageToLogin()
      return Promise.reject('需要鉴权')
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      const { errno = 0, errmsg = '' } = res.data
      if (errno === 0) {
        return res.data
      } else {
        return Promise.reject(errmsg)
      }
    }
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [
  requestInterceptors,
  responseInterceptor,
  Taro.interceptors.logInterceptor
]

export default interceptors
