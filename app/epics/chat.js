import {
  CHAT_CONNECT,
  CHAT_RECEIVE_MESSAGE,
  CHAT_DISCONNECT,
  CHAT_ERROR
} from '../ActionTypes'

import { Observable } from 'rxjs/Observable'

const chatEpic = action$ =>
  action$.ofType(CHAT_CONNECT)
  .mergeMap(({ payload }) => Observable
    .webSocket({
      url: payload,
      resultSelector: msgEvent => JSON.parse(msgEvent.data)
    })
    .map(payload => ({ type: CHAT_RECEIVE_MESSAGE, payload }))
    .takeUntil(action$.ofType(CHAT_DISCONNECT))
    .catch((err) => {
      console.log('ws error', err);

      return Observable.of({type: CHAT_ERROR});
    })
  )

export default chatEpic
