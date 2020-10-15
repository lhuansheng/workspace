function minimumTotal(triangle) {
  function dfs(x,y) {
    if(x === triangle.length) return 0
    let left = dfs(x+1,y+1)
    let right = dfs(x+1,y)
    // 已经知道 左大 还是 又大
    let min = Math.min(left,right)
    return min + triangle[x][y]
  }
  return dfs(0,0)
}
console.log(minimumTotal([
   [2],
  [3,4],
 [6,5,7],
[4,1,8,3]
]))
// 动态规划： 自底向上
// 递推公式： 如何从 已知的小规模(base case) 推导大问题的解
//   [11],
//  [9,10],
// [7,6,10],
// [4,1,8,3]
function minimumTotal1(triangle) {
  let len = triangle.length
  let dp = new Array(len).fill(null)
  dp[len - 1] = triangle[len - 1]
  for(let x = len - 2; x >= 0; x--) {
    if(!dp[x]) dp[x] = []
    for(let y = 0; y<triangle[x].length; y++) {
      dp[x][y] = triangle[x][y] + Math.min(
        dp[x+1][y],dp[x+1][y+1]
      )
    }
  }
  console.log(dp)
  return dp[0][0]
}