const http = require('http')
const fs = require('fs')
const server = http.createServer(function(req,res){
    // https://www.baidu.com/
    // console.log(req.url)
    // GET 参数 url
    // POST 参数
    if(req.url == '/'){
        // html
        const html = fs.readFileSync('index.html','utf-8')
        res.end(html)
        // 后端返回内容类型
        // 1xx
        // 2xx 200
        // 3xx 301/302 重定向
        // 4xx 401: 未授权 404客户端出问题  客户端
        // 5xx：服务端 500服务端出bug
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(`<h2>123事件</h2>`)
    }
    else if(req.url === '/getPosts'){
        // 没有返回

        let posts = [
            {title:'js',star:1000},
            {title:'php',star:2000},
        ]
        let str = ''
         //前端提交数据解析
        req.on('data',function(chunk){
            str += chunk
        })
        req.on('end',function(){
            console.log(JSON.parse(str))
        })
        res.end(JSON.stringify(posts))
       

    }
    // res.end('hello server')
})
server.listen(8080,function(){
    console.log('server is running 8080')
})