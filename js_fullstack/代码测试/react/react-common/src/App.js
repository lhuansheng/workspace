import React, { useState,useEffect } from "react";
function useCountDown(init){
  let [count, setCount] = useState(init)
  useEffect(() => {
   let time =  setInterval(() => {
     console.log(count)
      setCount(() => --count)
      if(count===-1) {
        clearInterval(time)
      }
    }, 1000);
  },[])
      return [count,setCount]
  }
  function App(){
  let [count, setCount] =useCountDown(10)
    useEffect(() => {
      setCount(()=>60)
      
    }, [])
      return (<div>{count}</div>)
  }
export default App;
