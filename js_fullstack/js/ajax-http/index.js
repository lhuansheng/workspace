//导入 node http 模块(处理网络)
const http = require('http')
// 导入 fs  fileSystem 文件系统  处理文件读写  
const fs = require('fs')
// 1. 前端 ajax 传给数据给后端, 后端接受前端的数据
// 2. 响应数据给前端
// baidu.com => 一段 html -> 浏览器发现是html 渲染成了页面 ->
//MIME  
// http:127.0.0.1:8081 => 把 ajax.html 内容返回给前端
const server = http.createServer(function(req,res){// require  response
    //你想 获取前端给我东西 就来 req
    //我要
    //首部需要键值对  声明内容类型为html
    console.log('当前正在请求的',req.url)
    if(req.url.includes('search')){
        //search 搜索功能
        // / 首页功能
        res.end(req.url.split('?')[1])
    }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //const file = fs.readFileSync('ajax1.html',{encoding:'utf-8'})
    // console.log(file)
    // res.end(file)
    //res.end('<h2>hello node 江西财经</h2>')
})
server.listen(8081,function(){
    console.log('server is running http:127.0.0.1:8081')
})