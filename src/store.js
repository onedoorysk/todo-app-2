import rootReducer from './reducers/'
import {createStore, applyMiddleware} from 'redux'
import addLoggingToDispatch from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk, addLoggingToDispatch]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store