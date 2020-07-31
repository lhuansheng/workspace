// 1.导包
import React from 'react'
import ReactDOM from 'react-dom'


let a = 10
let str = '中国'
let boo = true
const h1 = <h1>红红火火</h1>
const arr = [
  <h2>h2</h2>,<h3>h3</h3>
]

// 3. 调用 render 函数渲染 jsx XML 比 HTML 严格多了
// 什么情况下需要使用{}呢？ 当我们需要在 jsx 控制的区域内，写js表达式了了，则需要把js代码写到 {}

ReactDOM.render(
<div>
  {a}
  <hr/>
  {str}
  <hr/>
  {boo ? '真':'假'}
  <hr/>
  {h1}
  <hr/>
  {arr}
  </div>,document.querySelector('#app'))