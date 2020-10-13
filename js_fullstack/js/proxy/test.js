function toSaveObj(obj) {
  const handler = {
    
    get: function(target,property) {
      if(!target[property]){
        return new Proxy({},handler)
      }
      return target[property]
    },
    apply:function(target,thisArg,args) {
      if(target) {
        return target.apply(thisArg,args)
      }
      else return undefined
    }
  }
  function deepProxy(o) {
    Object.keys(o).forEach(key => {
      if(typeof o[key]==='object'||typeof o[key]==='function'){
        o[key] = deepProxy(o[key])
      }
      
    })
    return new Proxy(o,handler)
  }
  return deepProxy(obj)
}
let obj = {
  a:2,
  b:function(){},

}
console.log(toSaveObj(obj.c.d.f))