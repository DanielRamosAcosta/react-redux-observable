import * as ActionTypes from '../ActionTypes';

const pingEpic = action$ =>
  action$.ofType(ActionTypes.PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });

export default pingEpic
