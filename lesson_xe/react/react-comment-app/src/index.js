import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp'; //模块机制
import './index.css'; // 跟link标签说拜拜 像js 引入
// css in js webpack

ReactDOM.render(
  <CommentApp />,
  // 奈何前排， 孟婆 DOM document.createElement
  // 真实DOM
  document.getElementById('root')
)