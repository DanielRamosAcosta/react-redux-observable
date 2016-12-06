import * as ActionTypes from '../ActionTypes'

export function chatConnect (uri = process.env.WEBSOCKET_URI) {
  return {
    type: ActionTypes.CHAT_CONNECT,
    payload: uri
  }
}

export function chatDisconnect () {
  return {
    type: ActionTypes.CHAT_DISCONNECT
  }
}

export function sendMessage (message) {
  return {
    type: ActionTypes.CHAT_SEND_MESSAGE,
    payload: {message}
  }
}
