import express from 'express'
import React from 'react';
import {renderToString} from 'react-dom/server'
import Header from '../common/header'
const app = express()
// 将前端打包的文件放在 public,这样 就可以拿到资源了
app.use(express.static('public'))
app.get('*', (req,res)=>{
  Header.loadData().then(result => {
    const htmlStr = renderToString(<Header />)
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
    <script>window.songs=${JSON.stringify(result.data)}</script>
    <script src="/index.js"></script>
  </body>
  </html>
    `)

  })
  // console.log(htmlStr)
})
// 渲染 react 组件
app.listen(9090, () => {
  console.log('server is running 9090')
})
