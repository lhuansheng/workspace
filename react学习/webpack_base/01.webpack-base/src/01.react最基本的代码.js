// 假设 main.js 还是我们的入口文件
console.log('ook1dd333dd')
// webpack-dev-server 打包好的 main.js 是托管到了内存中，所以在项目根目录中看不到
// 但是，我们可以认为， 在项目根目录中，有一个看不见的main.js
// 1.这两个导入的时候，接受的成员名称，必须这么写
import React from 'react' //创建组件， 虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' //把创建好的 组件 和虚拟 DOM 放到页面上展示的

// 2. 创建虚拟DOM元素
// 参数1： 创建的元素的类型，字符串，表示元素的名称
// 参数2： 是一个对象或null，表示 当前这个 DOM 的属性
// 参数3： 子节点(包括 其他虚拟DOM 获取文本子节点)
// 参数n： 其他子节点
// <h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
// const myh1 = React.createElement('h1',null,'这是一个大大的H1')
const myh1 = React.createElement('h1',{id:'myh1',title:'this is a title'},'这是一个大大的H1')
const mydiv = React.createElement('div',null,'这是一个div元素',myh1)

// 渲染 页面上的 DOM 结构，最好的方式，就是写 html代码

const mytest=

// 3.使用ReactDom 把虚拟DOM 渲染到页面上
// 参数1： 要渲染的那个虚拟dom元素
// 参数2： 指定页面上的DOM元素，当作容器
ReactDOM.render(mydiv,document.getElementById('app'))