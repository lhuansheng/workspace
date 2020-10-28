function fn(b, c, d, x, y) {
  // 我按照 a,b,c,d为原型的基础上加值，题目测试
  let arr = [
    [0, b],
    [c, d],
  ];
  while (arr.length < Math.max(x, y)) {
    extend(arr);
  }
  console.log(arr);
  return arr[x-1][y-1] % Math.pow(10, 9);
  function extend(arr) {
    let temp = arr.map((res) => res.map((res) => res));
    for (let i = 0; i < temp.length; i++) {
      arr[i] = arr[i].concat(temp[i].map((res) => res + b));
    }
    for (let i = 0; i < temp.length; i++) {
      arr.push(temp[i].map((res) => res + c));
      arr[arr.length - 1] = arr[arr.length - 1].concat(
        temp[i].map((res, i) => {
          return res + d;
        })
      );
    }
  }
}
console.log(fn(1, 2, 3, 5, 5, 6));
