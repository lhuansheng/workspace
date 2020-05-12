const http = require('http')
const fs = require('fs')
const request = require('request')
request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'))
http.createServer((req,res)=>{
// console.log(req)
// juejin.com/search?type=all&query=js
// 后端会 接受
// 前端 type=all&query=js 当作流的方式传过来
// 头部： content-Type
// 
// get：数据放到 url
// post: 数据放到 body
const writeStream = fs.createWriteStream('./params.txt')
req.pipe(writeStream)
res.end('ok')
})
.listen(8088,()=>{
  console.log('8088启动成功了')
})