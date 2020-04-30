import React from 'react'; //UI function JSX
import ReactDom from 'react-dom'; 
// 入口文档
import CommentApp from './CommentApp'
ReactDom.render(
    <CommentApp/>,
    document.getElementById('root')
    );
