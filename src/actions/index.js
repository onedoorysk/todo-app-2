import TYPE from './_actionType'

export const toggleAction = (id) => ({type: TYPE.TOGGLE_TODO, payload: {id}})
export const addAction = (description) => ({type: TYPE.ADD_TODO, payload: {description}})
export const currentAction = (next) => ({type: TYPE.CURRENT_TODO, payload: {next}})