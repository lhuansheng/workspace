// call apply  一类
//  bind ： 调用函数除了 bind this 之外， 可以让我们分批传递参数
function sum(a,b,c){
  return a+b+c
}
// 参数传完整
sum.call(null,1,10,20)
// 可以不完整, 会返回一个函数，然我们接着传递剩下的参数
// sum abc
// ab
let add1=sum.bind(null,1,2)
// 继续传递剩下的c
let res=add1(20)
console.log(res)

// 
function test(reg,str){
  return reg.test(str)
}
let str=``,str1='123',str2=`
456`, str3='789'
// `` 输入过 都能帮你保留下来
let whiteSpace = /\n/g
//  \n : new line
// \t ： tab
//  glob: 全局
// console.log(test(whiteSpace,str))
// console.log(test(whiteSpace,str1))
// console.log(test(whiteSpace,str2))
// console.log(test(whiteSpace,str3))
// test: 测试一下某个字符串存不存在回车 
// 每次都带着 whiteSpace 

let hasWhiteSpace = test.bind(null,whiteSpace)
console.log(hasWhiteSpace(str))
console.log(hasWhiteSpace(str3))
console.log(hasWhiteSpace(str1))

let hasTabSpace = test.bind(null,/\t/g)
console.log(hasTabSpace('\t123'))
let hasNumber = test.bind(null,/[0-9]/g)
console.log(hasNumber('abc123'))