## http协议
应用层上的一个协议
fe前端 <=>  http    <=>   rd 后端(数据库)

https://www.cnblogs.com/cyyljw/p/10578056.html

App  http
初步认识http

## ajax

## 同步
一行接着一行的执行
## 异步
代码书写的顺序并不是执行的顺序

https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest

## node
- js  chrome: v8  解释执行js
- 页面 
- 网络

js 只再浏览器里面运行
v8 单独拿到服务端， node
<!-- 用 node 解释执行 js-->
node index.js

1. 双击
file:///D:/workspace/js_fullstack/js/ajax-http/ajax.html
file: 协议

2. live-server
http://127.0.0.1:5500/js/ajax-http/ajax.html

http://localhost:8080/ajax.html  域名
http://127.0.0.1:8080/ajax.html  等同
http 协议
localhost 域名
ajax.html  文件  放到一个服务器来了(只不过是本地)
127.0.0.1 IP 四个数字(0~255)

服务器免费领六个月
https://developer.aliyun.com/adc/student/?spm=5176.12901015.0.i12901015.4521525cha5Qdy#ecscolleges-class

端口存在的意义:
一台服务器(电脑),运行很多东西
prot: 区别每一个应用
ip地址能找到你这台电脑
假设:
数据库 占用 8060
提供搜索的服务  占用 443

## http 规定
- 请求行
  - 方法: GET juejin.com?query=js
  - url: juejin.com?query=js
  - 版本: 1.1

- 首(头)部
  - key: value
  - Content-Type  内容类型

- 实体
  - 传输的具体的数据
  

  总结一下 就是 前端用 ajax 发送请求 后端node req 接收 后端 node res 发出响应 前端ajax onreadystatechange接收渲染