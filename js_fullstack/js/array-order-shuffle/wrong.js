let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// // 没有真正的随机  伪随机
// // 每个数 让每个数一位出现的概率是均等的 => 把重复乱序足够多的次数，那么把每一位计算出平均值 ~4.5

// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // 索引只能是整数
    let idx = Math.floor(Math.random() * (len - i));
    [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]];
  }
  // console.log(arr)
  return arr;
}
let t = 10000;
for (let i = 0; i < t; i++) {
  // 浅拷贝
  let sorted = shuffle(arr.slice(0)); //传一个拷贝完的数据
  for (let i = 0; i < sorted.length; i++) {
    res[i] = sorted[i] + res[i];
  }
}

console.log(
  res.map((res) => {
    return res / t;
  })
);
// // 正在比较 两个数
// // 小于0 那么 a会 被排在 b前面
// // 大于0 相反

// console.log(arr.sort((a,b)=>a-b))

function bubbleSort(arr) {
  let arrLength = arr.length;

  for (let i = 0; i < arrLength - 1; i++) {
    let flag = true;
    for (let j = 0; j < arrLength - i - 1; j++) {
      let k = j + 1;
      // a,b
      // sort 的回调函数 控制条件成不成立
      // [0,1)
      // Math.random() - 0.5
      // 两个数交换概率 50%
      // 两个数可能交换 也可能不交换
      //
      if (arr[j] > arr[k]) {
        // let temp = arr[k]
        // arr[k]=arr[j]
        // arr[j] = temp
        [arr[j], arr[k]] = [arr[k], arr[j]];
        flag = false;
      }
    }
    debugger;
    if (flag) {
      break;
    }
    console.log(i);
  }

  console.log(arr);
}
// bubbleSort(arr)
