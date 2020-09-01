import express from 'express'
import React from 'react';
import path from 'path'
import Header from '../common/Header/Header.jsx'
import { renderToString } from 'react-dom/server'
// client ReactDOM.render(,root)
// server renderToString  服务器端只认识字符串,
const app = express()
app.get('*',(req,res) => {
  const root = <Header />
  // 把虚拟DOM(vnode) -> html string
  // 有事件 addEventListener  (浏览器专用的 api)
  const htmlStr = renderToString(root)
  // console.log(htmlStr)
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  <div id="root">${htmlStr}</div>
  </body>
  </html>
  
  `)
})
app.listen(3000,() => {
  console.log('server is running 3000')
})