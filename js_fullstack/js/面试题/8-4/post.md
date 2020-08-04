## GET POST
一个 是 req body, 一个是 query 参数 (a=1&b=2)
在浏览器
用户输入 url
img link script GET 参数也只能放到 url 里面去了

xmlhttprequest http postMan 只要客户端服务端约定好，参数放到哪里不受限制的


baidu.com/search?s=js
组成 url 的一部分

从协议本身来说，并没有限制 GET 传递参数不能放到 body
post 传递参数也可以放到 querystring

一个 url 由哪几部分组成

- get post 语义不一样
- get 资源可以缓存， post 不行 
- get url 长度有限，post requ body 不限制的
- get 不安全 post 更安全一点，其实都是不安全的， http 明文传输， https 加密

-