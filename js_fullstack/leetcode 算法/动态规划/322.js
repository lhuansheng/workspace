// 0(base case)
// -> 11
// 余额为0的时候 需要几枚 0
// 余额为1的时候 需要几枚 1(需要知道余额为 Math.min(1-1 1-2 1-5))
// 余额为2的时候 需要几枚 0
// 余额为3的时候 需要几枚 0
// 余额为4的时候 需要几枚 0
// ......
// 余额为4的时候 需要几枚 0
var coinChange = function(coins,amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0;
  for(let i = 1; i < dp.length; i++) {
    let minCount = Number.MAX_VALUE
    for(let coin of coins) {
      let remainAmount = i - coin
      if(remainAmount >= 0) { 
        minCount = Math.min(minCount,dp[remainAmount])
      }
    }
    dp[i] = minCount + 1
  }
  return dp[amount]
}