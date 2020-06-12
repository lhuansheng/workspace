import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


 
// 可变
let obj = {
}
let obj1 = obj
obj1.name = 123;  //本意修改 obj1, 但是却影响了 obj(副作用)

console.log(obj)
// 可变是万恶之源

let newObj={}
let obj3 = {
  ...newObj
}
obj3.name=123;  // 没有任何副作用
console.log(newObj,obj3)
// 组件 state
// redux state



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
