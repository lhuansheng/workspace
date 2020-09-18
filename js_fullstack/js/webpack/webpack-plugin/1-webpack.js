const { SyncHook, AsyncSeriesHook } = require('tapable')
const Plugin = require('./plugin.js')
class Webpack {
  constructor() {
    // 有很多生命周期
    this.hooks = {
      emit: new AsyncSeriesHook(),
      done: new SyncHook()
    }
  }
  run() {
    setTimeout(() => {
      // 执行所有的 tapPromise()类似于发布订阅
      this.hooks.emit.promise()
    }, 1000);
    setTimeout(() => {
      this.hooks.done.call()
    }, 2000);
  }
}
let options = {
  plugins:[new Plugin()]
}
let complier = new Webpack()
for (const p of options.plugins) {
  // 插件
  p.apply(complier)
  // apply (complier) {complier.hooks.emit.tapXXX}
}
complier.run()