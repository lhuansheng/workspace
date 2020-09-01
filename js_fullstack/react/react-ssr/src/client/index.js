import React from 'react'
import ReactDOM from 'react-dom'  
import Header from '../common/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import route from '../route'
import {renderRoutes} from 'react-router-config'
const App = () => {
  return (
   <BrowserRouter>
   {renderRoutes(route)}
   </BrowserRouter>
  )
}
// root 节点下面已经有东西了
// 客户端不需要再构造 DOM 节点了, 只需要服务端完成不了的
// 事件绑定     hydrate(调和)
ReactDOM.hydrate(<App />,document.getElementById('root'))
