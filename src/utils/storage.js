import Taro from '@tarojs/taro'

function getStorage(key) {
  try {
    var value = Taro.getStorageSync(key)
    if (value) {
      return value
    }
  } catch (e) {
    // Do something when catch error
  }
}

function setStorage(key, value) {
  try {
    Taro.setStorageSync(key, value)
  } catch (e) {}
}

export default {
  getStorage,
  setStorage
}
