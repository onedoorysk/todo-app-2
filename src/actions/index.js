import TYPE from './_actionType'

export const toggleAction = id => new Promise((resolve) => {
  setTimeout(() => {
    resolve({type: TYPE.TOGGLE_TODO, payload: {id}})
  }, 500)
})
export const addAction = description => ({type: TYPE.ADD_TODO, payload: {description}})
export const currentAction = next => ({type: TYPE.CURRENT_TODO, payload: {next}})