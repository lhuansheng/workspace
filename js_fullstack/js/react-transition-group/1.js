// 数组拍平
let a = [1, 2, [3, [4, [5]]]];
a.push(a)
let arr = [];
let map = new Map()
function flat(a) {
  let t = []
  // todo
  if(map.get(a)) return a
  map.set(a,t)
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      arr.push(a[i]);
    } else flat(a[i]);
  }

  return arr;
}
console.log(flat(a));
