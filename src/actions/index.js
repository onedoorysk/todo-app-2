import TYPE from './_actionType'

/* Promise action*/
export const toggleAction = id => new Promise((resolve) => {
  setTimeout(() => {
    resolve({type: TYPE.TOGGLE_TODO, payload: {id}})
  }, 500)
})

/* Thunk action*/
export const addAction = description => dispatch => setTimeout(() => {
  dispatch({type: TYPE.ADD_TODO, payload: {description}})
}, 1000)

/* Normal Action*/
export const currentAction = next => ({type: TYPE.CURRENT_TODO, payload: {next}})