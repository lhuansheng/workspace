var ary = [1, [2, [3, [4, 5]]], 6]
let res = []
// 递归2
function flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i]!=='object') {
      res.push(arr[i])
    }
    else {
      flat(arr[i])
    }
    
  }
}
flat(ary)
console.log(res)