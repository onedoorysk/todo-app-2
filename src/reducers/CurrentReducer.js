const currentInitState = 'all'

export default (state = currentInitState, action) => {
  console.log('hi')
  switch(action.type) {
    case 'CURRENT_TODO':
      state = action.payload.next
      return state
    default:
      return state
  }
}