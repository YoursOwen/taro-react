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
 */
export function makeActionCreator(type) {
  return {
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
  }
}
