## cookie
- name value
- Domain: cookie 生效的域名  baidu.com map.baidu.com 给主域设置了，那么子域也可以生效 不设置默认当前域名
- Path: /a/b  / 生效的路径  /代表根路径，该域名下路径都生效
- Expires/Max-Age: 过期时间 默认就是当前会话之后失效
- Size: 浏览器自己帮你算出来的
- HttpOnly: cookie 只在http传输， js 无法操作的 (cookie 可以由后端的 set-cookie 响应头设置，也可以由前端 js document.cookie='')设置
- Secure: 只在 https 的环境下面生效


  cookie 只要符合 domain + path 的生效范围 就会随着 http 请求发送
- SameSite: lax strict(cookie只在同域(juejin.im)生效,也就是说在其他的域名请求juejin.im的数据不会成功) none         (chrome今年出的属性) 
  
