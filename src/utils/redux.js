/**
 * @name createReducer
 * @param initialState Object
 * @param callAPI function handler
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

/**
 * @name makeActionCreator
 * @param type String
 * @param payload Object｜ Array ｜ String ｜ Number ｜ Boolean
 * @param shouldCallAPI function 检查是否有缓存
 * @param callAPI function 异步api回调
 */
export function makeActionCreator({
  type,
  payload,
  callAPI = () => {},
  shouldCallAPI
}) {
  return {
    types: [`${type}_REQUEST`, `${type}_SUCCESS`, `${type}_FAILURE`],
    shouldCallAPI,
    callAPI,
    payload
  }
}
