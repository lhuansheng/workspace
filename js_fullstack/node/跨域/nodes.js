const http = require('http')
http.createServer((req,res)=>{
  //允许8080访问
  res.writeHead(200,{
    'Content-Type':'application/json',
    'Access-Control-Expose-Headers':'Access-Control-Allow-Origin',
    'Access-Control-Allow-Origin':'http://localhost:5520',
    'Access-Control-Allow-Methods':'*',
    'Access-Control-Allow-Headers':'content-type, X-Requested-With',
    'Access-Control-Allow-Credentials':true,    //凭证 cookie,允许前端请求携带 cookie
    'Access-Control-Max-Age':-1,  //preflight 预检请求结果缓存时间
  })
  // cookie: localStorage, cookie 随着 http 请求头 自动发送
  let posts = ['js','php']
  res.end(JSON.stringify(posts))
})
.listen(9090,()=>{
  console.log(9090)
})