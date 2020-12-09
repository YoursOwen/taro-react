import Taro from '@tarojs/taro'
import apiConfig from '@/config/api'
import baseHttp from './http'

const webApi = {}

Object.keys(apiConfig).forEach((apiKey) => {
  const { url, method } = apiConfig[apiKey]
  webApi[apiKey] = (data, customOptions = {}, options = {}) => {
    customOptions = Object.assign(
      { showError: true, needResp: false },
      customOptions
    )

    return baseHttp[method.toLowerCase()](url, data, options)
      .then((resp) => {
        return customOptions.needResp ? resp : resp.data
      })
      .catch((error) => {
        const {
          data: { errno, errmsg }
        } = error

        // Auth
        if (errno === 501) {
          Taro.showToast({
            title: '请登录',
            icon: 'loading',
            duration: 1500,
            mask: true
          }).then(() => Taro.navigateTo({ url: '/pages/welcome/main' }))
        }

        // ShowError
        if (customOptions.showError && errno !== 0) {
          Taro.showToast({ title: errmsg, icon: 'none', mask: true })
        }
        return Promise.reject(customOptions.needResp ? error : error.data)
      })
  }
})

export default webApi
