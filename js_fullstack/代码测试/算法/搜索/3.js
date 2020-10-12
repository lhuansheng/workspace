

function sumOddLengthSubarrays(arr) {
  let sum = 0;
  function dps(temp = [], start = 0) {
    if (temp.length % 2 !== 0 && temp.length !== 0) {
      sum += temp.reduce((pre, cur) => pre + cur, 0);
    }
    for (let i = start; i < arr.length; i++) {
            temp.push(arr[i]);
            dps(temp, i + 1);
            temp.pop(arr[i]);
      }
  }
  dps();
  return sum;
}
sumOddLengthSubarrays([1, 4, 2, 5, 3]);
