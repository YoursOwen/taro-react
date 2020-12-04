import Taro from '@tarojs/taro'
import baseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem))

class httpRequest {
  baseOptions(params, method = 'GET') {
    let { url, data } = params
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    const option = {
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType
      }
    }
    return Taro.request(option)
  }

  get(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option)
  }

  post(url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }

  put(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  }

  delete(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }
}

export default new httpRequest()
