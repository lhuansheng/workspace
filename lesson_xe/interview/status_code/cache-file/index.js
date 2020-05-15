const http = require('http')
const fs = require('fs')
// 如果文件没有改变， 有必要一直打开文件，返回吗？
http.createServer((req,res)=>{
  // res.end()
  // 浪费网络资源的地方
  // 200 成功 返回内容
  // 1. 前端会缓存数据，localStorage sessionStorage
  // 2. a.txt 请求一次，就好
  // 3. 之后再请求， 如果服务器端文件没有发生改变，就不用返回文件内容，直接使用前端缓存的
  let stat = fs.statSync('./a.txt') // 同步，阻塞
  console.log(stat)
  // 1. 怎么样区分第一次和其他次？
  // 2. 怎么判断文件是否修改了
  // 3. 怎么告诉浏览器，直接使用缓存的数据
  if(req.headers['if-modified-since']){
    
    if(req.headers['if-modified-since']==stat.mtime){
      res.statusCode = 304
      res.end()
      return;
    }

  }
  res.setHeader("Last-Modified", stat.mtime) // 响应头
  // 下次再请求时，客户端会带上If-Modified-Since 字段

  fs.createReadStream('a.txt').pipe(res)  
})
.listen(5200)