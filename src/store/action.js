import { makeActionCreator } from '@/utils/redux'
import http from '@/services/http'

export const ACTION_GET_HOME = 'GET_HOME'

export const getHome = function (payload) {
  return makeActionCreator({
    type: ACTION_GET_HOME,
    callAPI: http.getHome,
    payload
  })
}
