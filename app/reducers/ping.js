import * as ActionTypes from '../ActionTypes'

export default function reducer (state = {
  isPinging: false
}, action) {
  switch (action.type) {
    case ActionTypes.PING:
      return {
        ...state,
        isPinging: true
      }
    case ActionTypes.PONG:
      return {
        ...state,
        isPinging: false
      }
    default:
      return state;
  }
}
