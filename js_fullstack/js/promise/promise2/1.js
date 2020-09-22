const fs = require('fs')
const { promisify } = require('util')
// fs.readFile('./1.js',(err,content)=>{
//   if(!err) {
//     // console.log(content)
//     fs.stat('1.js',(err,stat) => {
//       console.log(stat)
//     })
//   }
// })
let readFilePromise = promisify(fs.readFile)
let statFile = promisify(fs.stat)
statFile('./1.js').then(console.log)
readFilePromise('1.js')
.then(console.log)

// promisify 怎么实现
function promisify1(fn) {
  return function(...args) {
    // compose curry bind memorize
    // 防抖节流 ...
    // promise 风格
    // promisify 高阶函数
    return new Promise((resolve,reject) => {
      fn(...args,(err,content) => {
        if(!err) resolve(content)
      })
    })
  }
}


let promisefyReadFile = (path) => {
  return new Promise((resolve,reject) => {
    fs.readFile(path,(err,content) => {
      if(!err) {
        resolve(content)
      }
    })
  })
}
