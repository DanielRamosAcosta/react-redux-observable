import {
  CHAT_CONNECT,
  CHAT_RECEIVE_MESSAGE,
  CHAT_DISCONNECT,
  CHAT_ERROR,
  CHAT_SEND_MESSAGE
} from '../ActionTypes'

import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'

const socket = Observable.webSocket({ //FIXME: socket has to be global?
  url: process.env.WEBSOCKET_URI,
  openObserver: null // TODO: Dispatch action when the socket is open
})

const chatListenerEpic = action$ =>
  action$.ofType(CHAT_CONNECT)
  .mergeMap(() => socket
    .map(payload => ({ type: CHAT_RECEIVE_MESSAGE, payload }))
    .takeUntil(action$.ofType(CHAT_DISCONNECT))
    .catch((err) => Observable.of({type: CHAT_ERROR})))

const chatSenderEpic = (action$, state) =>
  action$.ofType(CHAT_SEND_MESSAGE)
    .map(action => {
      socket.socket.send(JSON.stringify({handle: state.getState().chat.username, text: action.payload.message}))
    })
    .skip()

export default combineEpics(
  chatListenerEpic,
  chatSenderEpic
)
