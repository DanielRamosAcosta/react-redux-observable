import * as ActionTypes from '../ActionTypes'

export default function reducer (state = {
  ping: false,
  pong: false
}, action) {
  switch (action.type) {
    case ActionTypes.PONGED:
      return {
        ...state,
        pong: true
      }
    default:
      return state;
  }
}
