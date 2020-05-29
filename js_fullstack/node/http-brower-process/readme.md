## req
浏览器： xhr fetch
node: http.get()

 不同xxx -> http -> 一样

 http: 超文本传输

 ```js
 const xhr = new XMLhttprequset()
 xhr.setheader("Content-Type":"application/json")
 xhr.open('POST','api.com',true)
 xhr.onload = function(){ }
 xhr.send({a:1,b:2})
 ```
 - 浏览器 拼接报文的工作
  基于http1.1报文传输(纯文本)： 
 - 首行
 - 首部
 - \r\n
 - 实体


## 解析报文
split('\r\n')
限制： 必须等到拿到一个完整的报文
显示：报文传输，可以允许我们，分段传输


## 解析
FSM (finity,state,machine)有限状态机
infinity: 正无穷 负无穷

浏览器解析报文： body(html),headers,响应行
html 怎么渲染出来了？ 浏览器也要解析 html 
js 怎么就被执行？ 浏览器 也要解析 js 
解析成什么？


## 编译原理

代码都是字符串
- 词法分析(分词)： 代码切割成一个个最小有效的单位
- 语法分析
- 生成中间代码
- 生成目标代码

语法：
 ```js
 {
   person:'我',
   time:'今天'
 }
```
