var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
// promise A+规范  https://blog.csdn.net/juhaotian/article/details/78925764
// 决议程序 见 链接中 2.3.2
var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2
.then(result => console.log(result,'a'))
.catch(error => console.log(error,'b'))