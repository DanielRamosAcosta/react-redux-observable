import * as ActionTypes from '../ActionTypes'

export function sendPing () {
  return {
    type: ActionTypes.PONGED
  }
}
