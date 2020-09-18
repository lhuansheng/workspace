##
输入url url到服务器 服务器渲染出来第一屏(落地页)
后续(js管) 切换页面(js) 就是 你通过前端路由

## 步骤
创建一个公共组件 Header
后端 server 使用 renderToString 将 header 转为 str
res.end('html')返回html
前端client 页需要写 index.js 
header.jsx 写 请求，发现 浏览器并没有请求的数据
做法:app.use(express.static('public')) 将 前端打包数据给后端，后端拿到script数据返回给前端
但是这样就违背了服务端渲染，因为数据是客户端didmout之后，这是前端浏览器执行的，解决办法
给header组件加一个静态属性