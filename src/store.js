import rootReducer from './reducers/index'

const createStore = (reducer) => {
  let state
  let listeners = []
  
  const getState = () => state
  
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  
  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      listeners.filter(l => l !== listener)
    }
  }
  dispatch({})
  
  return {getState, dispatch, subscribe}
}

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch
  
  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
  }
}

const store = createStore(rootReducer)
store.dispatch = addLoggingToDispatch(store)
export default store