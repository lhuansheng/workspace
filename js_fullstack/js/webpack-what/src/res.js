// commonJS require module.exports 的原理
(function (obj) {
  // 执行每个文件里面的内容
  let module = {}
  let cache = {}
  // 定义require获取require的值
  function require(params) {
    // console.log(params)
    // ./math.js  module.exports 导入了什么东西 拿到
    if(cache[params]) return cache[params]
    obj[params](module,require)
    cache[params] = module.exports
    // console.log(module)
    return module.exports
  }
  obj['./index.js'](module,require);                             
})({
  "./index.js": function (module,require) {
    // 从math.js引入
    // const sum = (a, b) => a + b;
    // 需要拿到 require的值
    const sum = require('./math.js')
    console.log(sum(10, 20));
  },
  "./math.js": function (module = {},require) {
    module.exports = (a, b) => a + b;

  },
});
// module.exports 如何在 浏览器上面运行的
