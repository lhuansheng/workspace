const MyKoa = require('./lib/application') //全栈  Koa class
const app = new MyKoa()
// // 手写Koa 模块化
// const app = new Koa()
// // http 
// // 源码
// // 上下文 req res

app.use((req,res)=>{
  res.end('shijie zai chandou')
})
app.listen(3000,()=>{
  
  console.log(`你的应用在3000端口启动`)
})