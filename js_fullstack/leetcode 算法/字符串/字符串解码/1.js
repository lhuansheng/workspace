// 分词
var strDecode = function(k) {
  let numStack = [], strStack = []
  let dig = '',str = ''
  for(let c of k) {
    if(/[0-9]/.test(c)) {
      dig += c
    } else if(/[a-z]/.test(c)){
      str += c
    } else if(c==='['){
      console.log(dig,str)
      numStack.push(Number(dig))
      strStack.push(str)
      dig = ''
      str = ''
    } else if(c===']'){
      // 这一组 [] 拼接结果
      let res = strStack.pop()+str.rdepeat(numStack.pop())
      str = res
    }
  }
  return str
}
console.log(strDecode('3[a2[ccc]]')
)