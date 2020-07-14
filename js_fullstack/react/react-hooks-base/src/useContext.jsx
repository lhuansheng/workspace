import React, { createContext, useState, useEffect, useContext, useRef, useReducer } from 'react';
// 跨层级传递数据
const context = createContext({
  theme: 'red'
})
// 消息队列 robbitmq  
// 生产者 消费者
function P() {
  let [obj,setTheme] = useState({theme: 'blue'})
  useEffect(()=>{
    setTimeout(() => {
      setTheme({
        theme:'red'
      })
      console.log(obj)
    }, 3000)
  },[])
  return (<context.Provider value={obj}>
    <Child a="1"/>
   </context.Provider> )
}
function Child() {
  return  <Son />
   
}
function Son() {
  const ref = useRef()
  // 最近的 context
  const value = useContext(context)
  // didmount
  useEffect(() => {
    console.log(ref.current)
  },[])
  return (
    <p>232342
      <h2 style={{color: value.theme}} 
      ref={ref}
      // ref="ref1" 
      // ref={()=>{}}
      >小雨</h2>
    </p>
  )
}
export default P;