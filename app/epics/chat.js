import {
  CHAT_CONNECT,
  CHAT_DISCONNECT,
  CHAT_SEND_MESSAGE,
  CHAT_RECEIVE_MESSAGE
} from '../ActionTypes'

import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject'

const socket = WebSocketSubject.create(process.env.WEBSOCKET_URI);

const chatListenerEpic = action$ =>
  action$.ofType(CHAT_CONNECT)
    .mergeMap(action => socket
      .retryWhen(
        err => window.navigator.onLine ?
          Observable.timer(1000) :
          Observable.fromEvent(window, 'online')
      )
      .takeUntil(action$.ofType(CHAT_DISCONNECT))
      .map(payload => ({type: CHAT_RECEIVE_MESSAGE, payload}))
    )

const chatSenderEpic = (action$, state) =>
  action$.ofType(CHAT_SEND_MESSAGE)
    .map(action => action.payload.text)
    .map(text => ({username: state.getState().chat.username, text}))
    .map(JSON.stringify)
    .map(msg => socket.next(msg))
    .skip()

export default combineEpics(
  chatListenerEpic,
  chatSenderEpic
)
