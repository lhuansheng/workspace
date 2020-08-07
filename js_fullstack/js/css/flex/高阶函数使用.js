let len = 3,i = 0, res = 0
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
//   i++
//   res += a
//   console.log(res)
// if(i >= len) return res
//  return sum
}
console.log(sum(1)(2)(3));

