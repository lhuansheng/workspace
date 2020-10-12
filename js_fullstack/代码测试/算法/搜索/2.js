// 求奇数子数组的总和，必须是连续的子数组
// 例如：
// 给你一个数组 arr = [1,4,2,3,5],
// [1] = 1
// [4] = 4
// [2] = 2
// [3] = 3
// [5] = 5
// [1,4,2] = 7
// [4,2,3] = 9
// [2,3,5] = 10
// [1,4,2,3,5] = 15
// sum = 58

function sumOddLengthSubarrays(arr) {
  let sum = 0;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  function dps(temp = [], start = 1) {
    if (temp.length % 2 !== 0 && temp.length !== 0) {
      console.log(temp)
      sum += temp.reduce((pre, cur) => pre + cur, 0);
    }

    for (let i = start; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        // console.log(temp[temp.length - 1] === arr[j]);
        if (temp[temp.length - 1] === arr[j]) {
          // if (i === j + 1) {
            temp.push(arr[i]);
            dps(temp, i + 1);
            temp.pop(arr[i]);
          // }
        }
      }

      // if(temp[temp.length -1]===arr[i-1]&&i>0)
      //   {
      //     temp.push(arr[i])
      //   dps(temp,i+1)
      //   temp.pop(arr[i])
      //   }
    }
  }
  dps();
  console.log(sum);
  return sum;
}
sumOddLengthSubarrays([1, 4, 2, 5, 3]);
