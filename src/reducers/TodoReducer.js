import v4 from 'uuid/v4'

const todoInitialState = [
  {
    id: v4(),
    description: 'task1',
    completed: false
  },
  {
    id: v4(),
    description: 'task2',
    completed: false
  },
  {
    id: v4(),
    description: 'task3',
    completed: false
  }
]

export default (state = todoInitialState, action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.payload.id) return {...todo}
        else {
          return {...todo, completed: !todo.completed}
        }
      })
    case 'ADD_TODO':
      return [...state, {id: v4(), description: action.payload.description, completed: false}]
    default:
      return state
  }
}