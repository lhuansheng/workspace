const initialCount = 0
function reducer(state = initialCount,action) {
  const {type,data} = action
  switch (type) {
    case 'ADD':
      return state + data
    case 'DEL':
      return state + data
    default:
      return state
  }
}