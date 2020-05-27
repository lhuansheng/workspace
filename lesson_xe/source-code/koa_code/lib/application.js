const http = require("http");
class MyKoa {
  constructor() {
    // 手写代码 源码分析
    console.log("管式koa 手写");
    this.fn = undefined;
  }
  // listen use
  // 有没有什么 es6 的写法可以替代 fn?
  listen(...args) {
    console.log(args);
    let server = http.createServer(this.fn);
    server.listen(...args);
  }
  use(fn) {
    this.fn = fn
  }
}

module.exports = MyKoa;
