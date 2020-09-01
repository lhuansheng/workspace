import express from "express";
import React from "react";
import path from "path";
import Header from "../common/Header/Header.jsx";
import { renderToString } from "react-dom/server";
import {StaticRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import route from '../route'

// client ReactDOM.render(,root)
// server renderToString  服务器端只认识字符串,
const app = express();
// 把public 映射成 静态资源的目录
app.use(express.static('public'))
app.get("*", (req, res) => {
  // const root = <Header />;
  // console.log(req.url)
  const root = (
    <StaticRouter location={req.url}>
      {renderRoutes(route)}
    </StaticRouter>
  )
  // 把虚拟DOM(vnode) -> html string
  // 有事件 addEventListener  (浏览器专用的 api)
  // function renderToString(com){
  //   return com()
  // }
  const htmlStr = renderToString(root);
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
  <script src="/index.js"></script>
  </body>
  </html>
  
  `);
});
app.listen(8080, () => {
  console.log("server is running 8080");
});
