import React,{createContext, useState} from 'react';

import './App.css';
const CounterContext = React.createContext({})
function App() {

  const [count, setCount] = useState(0)
  const add=()=>{
    setCount(count+1)
  }
  return (
    <CounterContext.Provider value={count,setCount}>
      <Context />
      <Counter />
    </CounterContext.Provider>
  );
 
}

// function App() {

//   const [count, setCount] = useState(0)
//   const add=()=>{
//     setCount(count+1)
//   }
//   return (
//     <div>
//       <p>总共点击了{count} 次</p>
//       <button onClick={add}>点击</button>
//     </div>
//   );
 
// }

export default App;
