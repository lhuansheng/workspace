const http = require('http')
const fs = require('fs')
const users = require('./user.json')
// console.log(users)
let version = 12345678
let server = http.createServer((req,res)=>{
  if(req.url == '/'){//如果请求的是首页的话
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    fs.createReadStream('./index.html').pipe(res)
    return;
  }
  else if(req.url =='/user'){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    console.log(JSON.stringify(users))
    res.end(JSON.stringify(users))
  }
  // if(req.headers['if-none-match']){
  //   if(Number(req.headers['if-none-match'])==version){
  //     res.statusCode = 304
  //     res.end()
  //     return;
  //   }
  //   // console.log(req.headers['If-None-Match'])
  //   else{
  //     res.setHeader('Etag',version)
  //   res.end('hello node')
  //   return
  //   }
  // }

  // res.setHeader('Etag','12345678')
  // res.end('hello world')
})

server.listen(3000)