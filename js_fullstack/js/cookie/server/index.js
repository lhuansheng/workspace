const http = require('http')
const fs = require('fs')
let count = 10000
let sessiontable = [{
  userName: 'liming', userId: 1001, login: true, expire: '2021', id: 01
}]
// 用户的登陆状态保持 
// 1. 第一次登陆完 后端写入一个cookie: userName=liming,useID=1001
  // cookie: sessionId:01
// 2 cookie 每次都随着 http 请求自动发送
// 3 每次后端取出 cookie 信息 if(login) {登陆状态有效的}
http.createServer((req,res) => {
  function isLogin() {
    if (req.headers['cookie']) {
      let cookie = req.headers['cookie']
      // console.log(cookie)
      // let [name, sessionId] = cookie.split('=')
      let cookies = cookie.split(';')
      let sessionCookie = cookies.find(item => item.includes('session'))

      let [name, sessionId] = sessionCookie.split('=')
      if(sessiontable.find(item=>{
        return item.id === Number(sessionId)
      })){
        return true
      }
      else return false
    } else return false
  }
  console.log(req.url)
  if(req.url === '/transfer'){
    if(!isLogin()){
      res.end('un auth')
      return;
    }
    count -=100
    res.end('ok')
  }
  else if(req.url === '/count'){
   res.end(count+'')
  }
  else if(req.url==='/islogin') {
    if(isLogin()){
      res.end('login')
    }
    else {
      res.end('not login')
    }
  }
  else {
    const html = fs.readFileSync('./index.html','utf-8')
    res.setHeader('set-cookie','sessionid=1;samesite=lax')
    res.end(html)
  }
  
})
.listen(9090, () => {
  console.log(9090)
})

// samesite: lax localhost 的某些get 请求 在zhaomeng.com 发出也能待cookie
// samesite: strict localhost 的请求 只有在 localhost 发出才会带cookie
// sameSite: none localhost 的get 请求 不过在什么域名发出都会携带 cookie
// 2. csrf_token： 随机 
// 用户登陆完 服务端 给你一个 token abcd
// 前端存起来
// 之后的请求 都要携带 这个 token
// 这样对于 跨站页面 zhaomeng.com 时没有这个 token 它发出去没有 token
// 3. 浏览器会给每个请求一个 reffer 字段 ， 表明这个请求的来源
// 服务端可以检测这个来源 reffer




// const Koa = require('koa');
// const path = require('path');
// const router = require('koa-router')();
// const app = new Koa();

// let count = 10000;

// router.get('/', async (ctx) => {
//   const fs = require('fs');
//   const html = fs.readFileSync('./index.html', 'utf-8')
//   ctx.cookies.set('login', 'hahaha', { 'sameSite': 'lax' });
//   ctx.body = html;
// })
// router.get('/transfer', async (ctx) => {
 
// })
// router.get('/count', async (ctx) => {
//   ctx.body = count;
// })

// app
//   .use(router.routes())
//   .use(router.allowedMethods());

// app.listen(9090, () => {
//   console.log('server is running 9090');
// });
