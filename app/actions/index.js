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
