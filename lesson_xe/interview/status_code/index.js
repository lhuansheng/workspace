var http = require('http')

// http 协议 1991年 html
http.createServer((req,res)=>{
  if(req.url == '/newpage'){
    res.writeHead(204) // a不跳转
    res.send('newpage')
  }
  // http 头，体
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
  // 七层模型，物理层  数据链路层 IP层 TCP层
  res.write('hello world')
  res.end(
    `
    <html>
      <head>
        <body>
        <a href="http://www.baidu.com">百度</a>
          <a href="/newpage">去新的页面</a>
        </body>
      </head>
    </html>
    `
  )
})
.listen(3000)
