import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'

import reducer from './reducers'

let middleware = []

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger())
}

export default createStore(reducer, applyMiddleware(...middleware))
