const express = require('express');
const data = require('./db.json');
// koa 是express 的小孩子
const app = express()
// get 请求谓语动词
app.get('/',function(req,res){
  // api 用  res.end(JSON.stringfy(express))
  // Content-Type: application/json; charset=utf-8
  res.json(data);
})

// 设计一个url，访问第一首诗歌
// restful
// URL 暴露一个资源，快播 乐视，卖版权  优酷，爱奇艺  
// 一切皆资源 URL 资源的名词
// get
// url + http 谓语动词 可以表达资源 对资源做什么操作
app.get('/posts/:id',function(req,res){
  // http://www.baidu.coom/posts/:id?a=1
  // :后面的就是params
 let id=req.params.id
  let post = data.posts.filter(post => post.id == id)
  res.json(post)
  // id  data.posts id
  //res.json()
})



// 添加一篇新的文章， 大家设计下 URL + 动词
// post
// app.post("/posts",)
app.listen(8080)