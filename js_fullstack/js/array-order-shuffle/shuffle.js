// 两个数 比较的时候
// 100% 交换 洗牌算法
// 从后往前 取一个数
// 从未洗牌的区间之内 随机取出一个数  b
// a b 交换
// a就完成了
// 从后往前 重复
let arr = [1,2,3,5,4,0];
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // 索引只能是整数
    let idx = Math.floor(Math.random() * (len - i));
    [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]];
  }
  console.log(arr)
  return arr;
}
shuffle(arr)