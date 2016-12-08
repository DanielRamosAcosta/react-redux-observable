import * as ActionTypes from '../ActionTypes'

export default function reducer (state = {
  connected: false,
  username: null,
  messages: []
}, action) {
  switch (action.type) {
    case ActionTypes.CHAT_RECEIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      }
    case ActionTypes.CHAT_CONNECT:
      return {
        ...state,
        connected: true,
        username: action.payload.username
      }
    case ActionTypes.CHAT_DISCONNECT:
      return {
        ...state,
        connected: false
      }
    default:
      return state;
  }
}
