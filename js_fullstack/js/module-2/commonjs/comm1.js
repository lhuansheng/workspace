console.log('1 开始')
var done = false
let obj = {
  a:1,b:2
}
const comm2 = require('./comm2')
module.exports.obj = obj
setTimeout(() => {
  obj.a=111
}, 3000);

