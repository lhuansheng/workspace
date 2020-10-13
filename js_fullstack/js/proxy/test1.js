let obj = {
  a:function fn() {
    return 'this is a function'
  }
}
let newFn = new Proxy(obj.a,{
  apply: function(target,thisArg,args) {
    console.log(target,thisArg,this,args)
    return Reflect.apply(target,thisArg,args)
  }
})
obj.a()