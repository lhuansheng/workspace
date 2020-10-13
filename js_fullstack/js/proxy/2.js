let NOOP = () => {}
function toSaveObject(obj) {
  let handle = {
    get(target,k) {
      if(target.hasOwnProperty(k)) {
        return target[k]
      }
      else {
        return new Proxy(NOOP,handle)
      }
    },
    apply(target,thisObj,args) {
      if(target) {
        return target.apply(thisObj, args)
      } else if(target === NOOP)
        return undefined;
    }
  }
  function deepProxy(o) {
    Object.keys(o).forEach(k => {
      if(typeof o[k]==='object' || 
      typeof o[k]=== 'function') {
        o[k] = deepProxy(o[k])
      }
    })
    return new Proxy(o, handle)
  }
  return deepProxy(obj)
}
let obj = {
  b:3,
  d:() => 5
}
let nObj = toSaveObject(obj)
console.log(nObj.a.b.c.d.e)
console.log(nObj.f())
console.log(nObj.b)
console.log(nObj.d())