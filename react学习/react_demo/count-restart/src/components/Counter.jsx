import React from 'react';
function Counter(props) {
  increment=()=>{
    
  }
  decrement=()=>{

  }
  incrementIfOdd=()=>{

  }
  incrementAsync=()=>{

  }
  
  return(
    <div>
       {/* <p>counter: { props.count}, person 总人数为：{props.persons.length}</p> */}
        <select ref="select_number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={increment}>+</button>&nbsp;
        <button onClick={decrement}>-</button>&nbsp;
        <button onClick={incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={incrementAsync}>increment async</button>
    </div>
  )
}
export default Counter