import React from 'react';
import ReactDOM from 'react-dom'
// react 链表
// preact 数组
let hooks = []  //当前组件用到的所有 hook 闭包里面的变量
let currentIndex = 0
// [[state,setState],[],[]]
const useState = (function() {
  return function(initVal) {
    // currentIndex 组件里面调用的hook 调用的顺序
    // 不能出现在 类似 if 里面去
    if(!hooks[currentIndex]) hooks[currentIndex] = []
    let hookState = hooks[currentIndex]
    hooks[currentIndex][0]=hookState[0]|| initVal
    function setState(newState) {
      hookState[0] = newState
      render()
    }
    hookState[1] = setState
    currentIndex ++
    return hookState
    
  }
})()
//  const useState = (function() {
//   let _state;
//   return function (initValue) {
//     _state = _state || initValue
//     function setState(newState) {
//       _state = newState
//       render()
//     }
//     return [_state,setState]
//   }
//  })() 
function App() {
  // reRender
  // count 因为 useState(0) 难道 不应该是 0 吗?
  // 闭包
  const [time, setTime] = useState(4)
const [count, setCount] = useState(0)// 记住上一次的count ？
let c = 0  // 记不住
return (
  <div>
    {time}
    <br/>
    {count}
    <button onClick={() => setCount(count+1)}>+</button>
    <button onClick={() => setTime(time+1)}>setTime</button>
  </div>
)
}

function render() {
  currentIndex = 0
  ReactDOM.render(<App />,document.getElementById('root'))
}
render()