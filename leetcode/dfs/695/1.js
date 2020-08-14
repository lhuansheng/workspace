/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
  //   let directions = [[-1,0],[1,0],[0,-1],[0,1]]

  let count = 0
  let maxval = 0
  // 找出所有的1
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //  console.log(grid[i][j])
      if (grid[i][j] === 1) {
      let val=  dfs(grid, i, j)
      if(val>maxval) {
        maxval = val
      }
       

      }
    }
  }
 
  return maxval;
};

function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 0;
  grid[i][j] = 0
  let a = 1
  a += dfs(grid, i, j + 1)
  a += dfs(grid, i, j - 1)
  a += dfs(grid, i + 1, j)
  a += dfs(grid, i - 1, j)
  return a
}

let arr = [[1,0,0,0,0,0],[0,0,0,0,0,1],[1,1,1,0,0,0],[1,1,1,0,0,0]]
console.log(maxAreaOfIsland(arr))