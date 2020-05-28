import React from 'react';
import ReactDOM from 'react-dom';
// 数据管理模式
// 创建store 中央仓库 数据管理的架构
// createStore comments 放到中央仓库里去
import {Provider} from 'react-redux'
// 在之前路由学习之后，带给大家 数据可以独立开发，UI组件更纯粹
// 财务
import {createStore} from 'redux';  // provider 把这个数据提供出来
// commentApp comments 父组件， props 事件
// react-router  react-redux
// 数据就放到仓库，跟组件没有依赖关系
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp/>
  </Provider>,
  document.getElementById('root')
)