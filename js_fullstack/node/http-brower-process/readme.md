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
 ```js

