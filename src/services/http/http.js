import Taro from '@tarojs/taro'
import baseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem))

class httpRequest {
  baseOptions(params, method = 'GET', options) {
    let { url, data } = params
    const base = {
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json'
      }
    }
    const option = Object.assign(base, options)

    return Taro.request(option)
  }

  get(url, data = '', options) {
    let params = { url, data }
    return this.baseOptions(params, 'GET', options)
  }

  post(url, data, options) {
    let params = { url, data }
    return this.baseOptions(params, 'POST', options)
  }

  put(url, data = '', options) {
    let params = { url, data }
    return this.baseOptions(params, 'PUT', options)
  }

  delete(url, data = '', options) {
    let params = { url, data }
    return this.baseOptions(params, 'DELETE', options)
  }
}

export default new httpRequest()
