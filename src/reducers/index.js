import todoReducer from './TodoReducer'
import currentReducer from './CurrentReducer'
import {combineReducers} from 'redux'

export default combineReducers({tasks: todoReducer, current: currentReducer})