import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'

import rootReucer from './rootReducer'

const middlewares = [ logger ]

const store = createStore(
  rootReucer,
  applyMiddleware(...middlewares)
)

export default store
