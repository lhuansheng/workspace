const {obj} = require('./comm1')
console.log(obj)
setTimeout(() => {
  console.log(obj)
}, 5000);