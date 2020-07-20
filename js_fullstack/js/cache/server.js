const express = require('express')
const md5 = require('md5')
const app = express()
// GET 路由
app.get('/big.js',(req,res) => {
  console.log('here')
  const fs = require('fs')
  const jsContent = fs.readFileSync('./big.js','utf-8')
  const Etag = md5(jsContent)
  const oldEtag = req.headers['if-none-match']
  if(Etag === oldEtag){
    // 文件没有变化
    // 从缓存里面读取 304 (not modified) 
    res.sendStatus(304).end('')
    return ;
  }
  // 一堆 头字段
  // content-type
  // 20s内 不会重复从服务器请求数据
  // 强缓存:200 from memory cache ,这段时间请求不会到达服务器
  // Expires 明确: 2020-7-21 客户端时间可以设置，不好用
  // Cache-Control: 相对时间
  // if modified-since: 修改了文件文件之后的最后时间的变化
  // 服务器 对比前后两次文件有没有变化 从时间考虑， 有缺陷
  res.setHeader('Cache-Control','max-age=5')

  // 协商缓存: 请求会到达服务器
  // 20s 之后， 请求(会携带 if-none-match 的字段)到达服务器
  // if-none-match 浏览器 发现 上一次 服务器 有 ETag 设置，浏览器自动发送一个
  // ?? etag 生成: MD5
  res.setHeader('ETag',Etag)
  res.end(jsContent)
})
app.listen(9090,()=>{
  console.log(9090)
})