import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger'
import rootReducer from './reducers'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware(rootEpic)

let middleware = [
  epicMiddleware
]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger())
}

export default createStore(rootReducer, applyMiddleware(...middleware))
