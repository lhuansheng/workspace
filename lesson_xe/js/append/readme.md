- DOM document 文档就是网页, js内存里, 文档对象模型
- js  -> html  转化
DOM js 数据结构tree appendChild  组成一棵树
ul>li>textnode
document.createElement('tag')  标签节点
document.createTextNode('babab') 文本节点

哪怕是文字, 都是节点  都是对象
 前端js, html, css, js 是王者, js 可以操控 html, css, 这些api  叫做dom api

 昨天讲的是api
document.createElement('div')
document.appendChild()
document.createTextNode() 面向api编程

 - 面向业务编程
 this.state.liked true/false html 跟新
 1.分步
    动态讲 like button 添加到页面上
    likeButton class 方便复用
    既要用 html 来快速完成DOM， 又要能添加事件
    1. 要 dom 节点对象
    2. innerHTML

- js this 指向 你不知道的javascript this
  this 动态决定， 在每个函数里面都有 this 是个指针，
  具体指向谁？ 由它的调用方式决定
  1. 作为对象的方法调用， this 指向对象本身
  2. 作为事件函数， this 指向事件发生的元素
     bind 可以强行去绑定函数内部的this 指向谁？

- 封装 class 复用
  constructor  声明属性 this.state.
  render() 渲染到页面上
  changeLikeText()

  createDOMFromString 为什么要写到外面
  代码思维的顶级， 
  createDOMFromSring  不该属于LikeButton类，它独立的，
  