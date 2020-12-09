import Taro from '@tarojs/taro'
// import { pageToLogin } from '@/utils/http'
import Storage from '@/utils/storage'
import { STATUS_TEXT } from './config'

const requestInterceptors = (chain) => {
  let requestParams = chain.requestParams
  requestParams.header = { ...requestParams.requestParams }
  let Token =
    requestParams.header['X-BfcMall-Token'] || Storage.getStorage('token')
  requestParams.header['X-BfcMall-Token'] = Token
  return chain.proceed(requestParams)
}

const customerInterceptor = async (chain) => {
  const requestParams = chain.requestParams

  try {
    const response = await chain.proceed(requestParams)
    console.log(
      '🚀 ~ file: interceptors.js ~ line 22 ~ customerInterceptor ~ response',
      response
    )

    const {
      data,
      data: { errno = -1, errmsg = '请求异常' }
    } = response

    if (errno === 0) {
      return data
    } else {
      return Promise.reject({ ...data, errno, errmsg })
    }
  } catch (error) {
    console.log(
      '🚀 ~ file: interceptors.js ~ line 45 ~ customerInterceptor ~ error',
      error
    )
    const { status = 500 } = error
    return Promise.reject({
      errno: status,
      errmsg: STATUS_TEXT.status,
      data: {}
    })
  }
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [
  requestInterceptors,
  customerInterceptor,
  Taro.interceptors.logInterceptor,
  Taro.interceptors.timeoutInterceptor
]

export default interceptors
