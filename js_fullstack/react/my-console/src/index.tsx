import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 声明方法
// type originaConsole = (...args: any[]) => void;
// // 保持console.log的地址
// let originConsole:originaConsole = console.log
// // console.log指向了新的方法(地址)
// console.log = function(...args: any[]) {
//   alert('called')
//   originConsole.apply(window.console, args)
// }
// console.log(1)
// 如何监听 数组 push 这个行为
// let arr = [1,2,3]
// arr.push(4); // push 发生了


// let originPush= Array.prototype.push
// Array.prototype.push = function(...items: any[]) :number {
//   console.log('push call',items)
 
//   return originPush.apply(this, items)
 
// }






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
