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

## JSONP 解决跨域的
不同于 xhr fetch, 不受跨域限制：
img
src
link
script

借助了 script

1. jsonp 后端给你返回的是什么， 头条
前端回调函数的名字和它返回的内容

https://c.y.qq.com/v8/fcg-bin/album_library?g_tk=1278911659&hostUin=0&format=jsonp&jsonpCallback=callback&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cmd=firstpage&page=0&pagesize=20&sort=1&language=-1&genre=0&year=1&pay=0&type=-1&company=-1

封装jsonp
1. 创建一个jsonp函数
2. 返回一个Promise回调函数
3. 在该回调函数里面 定义一个要传给后端的function为一个随机的名字的function
4. 创建这个function 通过function 调用 reslove(data)获取后端传回来的数据
5. 创建一个script元素
6. 在script 元素中插入src属性，url为`${url}?callback=${funcName}`
7. 将script插入body标签



