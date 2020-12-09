import _ from 'lodash'
import { combineReducers } from 'redux'
import { createReducer } from '@/utils/redux'
import ActionTypes from './action'

const homeInfo = createReducer(
  {},
  {
    [ActionTypes.ACTION_GET_HOME.REQUEST]: (state, action) => {
      console.log('reducerAction', action)
      return _.defaults({ query: false, error: undefined }, state)
    },
    [ActionTypes.ACTION_GET_HOME.SUCCESS]: (state, action) => {
      console.log('reducerAction', action)
      return {
        ...state,
        ...action.response,
        query: false,
        error: undefined
      }
    },
    [ActionTypes.ACTION_GET_HOME.FAILURE]: (state, action) => {
      console.log('reducerAction', action)
      return _.defaults({ query: false, error: true }, state)
    }
  }
)

export default combineReducers({
  homeInfo
})
