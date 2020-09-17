const http = require('http')
class Koa {
  constructor() {
    this.middleWares = []
  }
  use(fn) {
    this.middleWares.push(fn)
  }
  listen(port) {
    http.createServer((req,res) => {
      // req inComing 
      // 请求进来创建中间件  组合洋葱模型
      let THAT = this
     
      let ctx = {
        set body(val) {
          res.end(val)
        },
        // set statusCode(code) {

        // }
      }
      run()
      function run() {
        // 
        dispatch(0)
        function dispatch(index) {
          let fn = THAT.middleWares[index]
          if(!fn) return;
          fn(ctx,()=>{
      
            index++
            dispatch(index)
          })
        }
      }
      
    })
    .listen(port)
  }
}
let app = new Koa()
app.use(async (ctx,next) => {
  console.log(1)
  await next()
  console.log(2)
})
app.use(async (ctx,next) => {
  console.log(3)
  await next()
  ctx.body='xxx'
  console.log(4)
})
app.listen(3000)