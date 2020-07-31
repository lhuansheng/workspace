// 1.导包
import React from 'react'
import ReactDOM from 'react-dom'



// 2. 创建虚拟dom元素
// const mydiv = React.createElement('div',{id:'mydiv'},'这是一个div元素')

// HTML是最优秀的标记语言；
// 注意： 在js 文件中，默认不能写 这种 类似于 HTML 标记， 否则 打包会失效
// 可以使用 babel 来转换 这些 js 中的标签
// 注意: 这种在js 中，混合写入类似于html的语法，叫做 jsx语法，符合xml规范的js
// 注意 jsx语法的本质， 还是在 运行的时候，被转换成了react.createElement 形式来执行的
const mydiv = <div id="mydiv" title = "div aaa">
  <div>zheshi1</div>
  这是一个div</div>


// 3. 调用render 函数渲染
ReactDOM.render(mydiv,document.querySelector('#app'))