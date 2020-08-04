// 题目
// 实现 trim
// '    1   '   =>. '1'
function trim1(str) {
 str = str.replace(/(^\s+)|(\s+$)/g,'')
 return str
}

function trim2(str) {
  // todo
  let L = 0,
      R = str.length - 1;
  while (str[L] === " ") {
      L++;
  }
  while (str[R] === " ") {
      R--;
  }
  console.log(L, R)
  return str.substring(L, R + 1)
}
console.log(trim("   1   "))

console.log('aa'+trim1('   12 33  ')+'aaa')

