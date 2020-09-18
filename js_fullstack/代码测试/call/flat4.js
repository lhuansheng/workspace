var ary = [1, [2, [3, [4, 5]]], 6]
// join 只适用于字符串数组
function flat(arr) {
  return arr.join().split(',')
}
