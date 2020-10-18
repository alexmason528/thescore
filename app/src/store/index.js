import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import sagas from './sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger({ collapsed: true })
  middlewares.push(loggerMiddleware)
}

const enhancers = [applyMiddleware(...middlewares)]

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

export const store = createStore(reducers, composeEnhancers(...enhancers))

sagaMiddleware.run(sagas)
