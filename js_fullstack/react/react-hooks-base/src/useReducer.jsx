import React, { useReducer, useCallback } from 'react';
function reducer(state, action){
  switch(action.type){
    case 'ADD':
      return {count: state.count + 1}
      case 'REDUCE':
      return {count: state.count - 1}
    default: 
      return state
  }
}
function Counter() {
  const [store, dispatch] = useReducer(reducer,{count:0})
  const handleAdd = useCallback(()=>{
    dispatch({type: 'ADD'})
  },[])
  const handleReduce = useCallback(()=>{
    dispatch({type: 'REDUCE'})
  },[])
  return (
    <div>
      count: {store.count}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReduce}>-</button>
    </div>
  )
}
export default Counter