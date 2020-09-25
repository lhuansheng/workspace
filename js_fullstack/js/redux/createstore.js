function createStore(reducer) {
  let state
  function  getState() {
    
    return state
  }
  function dispatch(action) {
    state = reducer(state, action);
  }
  dispatch({type: ''});
  return {
    dispatch,getState
  }
}
let reducer = function (state = 1, action) {
  return state
}



// react-redux 把这流程给 react 用
// react-redux 把 redux 内部的状态转换成 react state
// 把 redux 内部的 dispatch 交给 connect 的 mapDispatchToProps
// 这样我们在组件里面就可以拿到 dispatch, 修改状态
