const mid1 = (next) => (action) => {
  if(typeof action === 'function') {
    console.log('aaa')
    return action()
  }
  return next(action)
}

// chain 拿到的就是 middleware2的结果
const mid2 = (next) => (action) => {
  console.log('mid2 start')
  next(action)
  console.log('mid2 end')
}
// redux 已经加载完了 两个中间件
const middlewares = [mid1,mid2]
// compose flow 将函数合并在一起 
function myFlow(fns) {
  // 组合所有的 函数
  // fn3(fn2(fn1()))
  return function(defaultVal) {
    let res = defaultVal;
    while(fns.length) {
      let fisrt = fns.shift();
      res = fisrt(res);
    }
    return res;
  }
}
const chain = myFlow(middlewares)
let dispatch = chain(() => {
  console.log('就是 redux 源码內部最原始 只能处理 action 是纯对象的 dispatch 函数')
})
dispatch(()=>{console.log('bbbbb')})
// fn3(fn2(fn1)) 中间得到的上一个结果 也是一个函数
