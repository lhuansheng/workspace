// // let obj = {}
// // Object.defineProperty(obj,'a',{
// //   // 添加a属性，值为1
// //   value:1
// // })

// function log(target,key,descriptor) {
//   let orininAdd = descriptor.value
//   descriptor.value = function(...args) {
//     console.log('start')
//     // this指向哪里要看再哪里调用，所以这里直接将this加上即可
//     let res = orininAdd.apply(this,args)
//     return res
//   }
  
// }
// class Math {
//   constructor() {
//     this.c = 10
//   }
//   // 无侵入
//   @log
//   add(a,b) {
//     const sum = a+b + this.c
//     return sum
//   }
// }
// let m = new Math()
// // m.add(1,2)  // 监听一下 add 方法有没有被调用
// console.log(m.add.toString())
let a = new Promise((resolve,reject)=> {
  reject(111)
})

.then((res,err) => {
  console.log(res,err)
},(err)=> console.log(err))