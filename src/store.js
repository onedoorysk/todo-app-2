import rootReducer from './reducers/'
import {createStore, applyMiddleware} from 'redux'
import addLoggingToDispatch from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

let middlewares = [thunk]

let composedMiddlewares

if (process.env.NODE_ENV === 'development') {
  middlewares.push(addLoggingToDispatch)
  composedMiddlewares = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  composedMiddlewares = applyMiddleware(...middlewares)
}

let store = createStore(rootReducer, composedMiddlewares)

export default store