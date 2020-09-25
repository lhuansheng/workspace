var ary = [1, [2, [3, [4, 5]]], 6]
// 递归1
function flat(arr) {
  // 思路：定义一个空数组，遇到 非对象类型，直接 push,若是对象类型，递归遍历
  // 出口， 数组遍历完成
  let a = []
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      // a.push(...flat(arr[i]))
      a = a.concat(flat(arr[i]))
    }
    else {
      a.push(arr[i])
    }
  }
  return a
}

console.log(flat(ary))