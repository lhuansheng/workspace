import React,{useState} from 'react';

import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const add=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <p>总共点击了{count} 次</p>
      <button onClick={add}>点击</button>
    </div>
  );
 
}

export default App;
