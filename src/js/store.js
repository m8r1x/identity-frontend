import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './rootReducer'
import saga from './rootSaga'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(logger, sagaMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer, 
  composeEnhancers(middleware)
)

sagaMiddleware.run(saga)