const express = require('express')
// 实例化一个app 应用对象
const app = express()
// 使用内置中间件去解析post请求中以 urlencoded 形式编码的参数
app.use(express.urlencoded({extended:true}))
// 如果是以json传过来的post 请求，需要如下解析
app.use(express.json())
// 暴露静态资源
app.use(express.static(__dirname + '/public'))

//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/test_get',(req,res)=>{
  console.log('有人发来了get请求')
  console.log(req.query)
  res.send('你发来的get请求我收到了，这就是我给你的数据，略略略')
})
app.post('/test_post',(req,res)=>{
  console.log(req.body)
  res.send('你发来的post请求我收到了，这就是我给你的数据，略略略')
})
app.listen(8080,()=>{
  console.log('8080端口启动了')
})