let obj = {}
// 代理之后，用的应该是代理对象
// proxy只监听第一层
let proxyObj = new Proxy(obj, {
  get(...rest) {
    return Reflect.get(...rest)
  },
  has(...rest){
    console.log('监听到 in 被调用了')
    return Reflect.has(...rest)
  },
  getPrototypeOf() {},
  setPrototypeOf() {},
  defineProperty() {},
  deleteProperty() {},
})
console.log('b' in proxyObj)
// new Proxy(数组)
// new Proxy(函数)
let f = () => {}
let newF = new Proxy(f, {
  apply(...rest) {
    console.log('f has been called')
    return Reflect.has(...rest)
  }
})
newF()