import * as ActionTypes from '../ActionTypes'

export default function reducer (state = {
  connected: false,
  messages: []
}, action) {
  switch (action.type) {
    case ActionTypes.CHAT_RECEIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      }
    // FIXME
    case ActionTypes.CHAT_CONNECT:
      return {
        ...state,
        connected: true
      }
    case ActionTypes.CHAT_CONNECTED:
      return {
        ...state,
        connected: true
      }
    default:
      return state;
  }
}
