// 轻量级的web 开发框架, js node 50%
// js 一人打天下
const Koa = require("koa");
const app = new Koa(); // web server
const fs = require('fs')
// 启动一个服务 函数可以封装一个服务
// const func = ctx =>{
// console.log(ctx)
// ctx.response.body = 'fanc'
// }
const main = (ctx) => {
  // console.log(ctx,'-----')
  // ctx.response.body = 'Hello world';
  // req response
//  协议  操作系统(内存 node 文件系统 D:) 网络 数据库
  fs.readFile('./template.html','utf-8',
  function(err,data){
    ctx.response.type = "html"; //响应头
    ctx.response.body = data;
  })
// 分层 网站 大一点的网站，返回一个html 文件(MVC View)
  // const html= fs.readFileSync('./template.html','utf-8')
  
};
// app.use(func);
app.use(main); // 启用了一个服务 给访问者 request用

app.listen(3000);
