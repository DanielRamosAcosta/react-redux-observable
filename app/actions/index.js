import * as ActionTypes from '../ActionTypes'

export function chatConnect (username, uri = process.env.WEBSOCKET_URI) {
  return {
    type: ActionTypes.CHAT_CONNECT,
    payload: {
      uri,
      username
    }
  }
}

export function chatDisconnect () {
  return {
    type: ActionTypes.CHAT_DISCONNECT
  }
}

export function sendMessage (text) {
  return {
    type: ActionTypes.CHAT_SEND_MESSAGE,
    payload: {text}
  }
}
