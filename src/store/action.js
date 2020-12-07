import { values } from 'lodash'
import { makeActionCreator } from '@/utils/redux'
import http from '@/services/http'

const ACTION_GET_HOME = makeActionCreator('GET_HOME')

export const getHome = function (payload) {
  return {
    types: values(ACTION_GET_HOME),
    callAPI: http.getHome,
    payload
  }
}

export default {
  ACTION_GET_HOME
}
