let action1 = {
  type: 'INCREMENT'
}
let action2 = {
  type: 'DECREMENT'
}
// let action3 = function(dispatch) {
//   axios().then(() => {
//     dispatch()
//   })
// }
// store.dispatch(action3)
function reducer(state=1,action) {
  if(action.type === 'INCREMENT'){
    return state+1
  }
  else if(action.type === 'DECREMENT'){
    return state-1
  }
  else {
    return state
  }
}
let store = createStore(reducer)
store.dispatch(action1)
console.log(store.getState())
function createStore(reducer) {
  // state不能等于null,null是一个合法的值，为空，undefined 
  let state = undefined;
  // let state = reducer(undefined,{type:''})
  function dispatch(action) {
    
    state = reducer(state,action)
  }
  dispatch({type:''}) // state 为 reducer 那里的默认值,这就是为了生成一个默认的reducer
  function getState() {
    return state
  }
  return {
    dispatch,getState
  }
}