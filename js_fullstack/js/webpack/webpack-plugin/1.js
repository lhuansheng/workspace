// AsyncSeriesHook 异步串行，等上一个异步结束才能执行下一个
const { SyncHook, AsyncSeriesHook } = require('tapable')
const hook = new SyncHook()
const asyncHook = new AsyncSeriesHook()
hook.tap('hook1', () => {
  console.log(1)
})
hook.call()
asyncHook.tapPromise('xxx', () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, 3000);
  })
})
asyncHook.tapPromise('xxx', () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, 4000);
  })
})
console.time('a')
asyncHook.tapAsync('aaa', (cb) => {
  setTimeout(() => {
    cb()
  }, 3000);
})

// 执行完所有的tapPromise .then()
asyncHook.promise().then(() => {
  // 10s
  console.timeEnd('a')
  console.log(`async complete`)
})
asyncHook.callAsync(()=>{
  console.log('结束了')
})
