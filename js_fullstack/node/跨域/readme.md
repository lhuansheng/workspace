## 跨域
浏览器安全策略

一个源向另外一个源发出请求 叫跨域
同源： 同协议(http/https),同域名，同端口
两个源不相同： 产生跨域

CORS: cross origin resource share

## 1
Access-Control-Allow-Origin

## http 头
请求头
accept

响应头
set-Cookie:

通用头:
Content-Type: 
- 前端请求的时候 带给后端内容 编码的类型： www-url... /text/plain, formdata
- 后端告诉前端我给资源的类型


## 简单请求
跨域直接发出请求

## 非简单请求
- OPTIONS preflight /api
- POST /api

