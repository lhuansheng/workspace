function fn(n, ...args) {
  // 动态规划思想，将大问题分成小问题，假设只有前面一个数，看是否能成，
  // 成的话那么剩余多少人可以安排
  let left = 1;
  for (let i = 0; i < n; i++) {
    if (args[i] === 2) {
      return "NO";
    }
    if (args[i] - 1 <= left) {
      left = left - args[i] + 1;
    } else return "NO";
  }
  return "YES";
}
console.log(fn(2, 1, 2));
