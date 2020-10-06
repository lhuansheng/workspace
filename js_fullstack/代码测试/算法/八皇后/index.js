function queens(n) {
  const board = new Array(n).fill(0).map((x) => new Array(n).fill("."));
  let res = [];
  function check(row, col) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if(board[i][j]==='Q'&&(j===col||i+j===row+col||i-j===row-col)) {
          return false
        }
      }
    }
    return true
  }
  
  
  function dps(row) {
    // 递归出口
    if (row === n) {
      res.push(board.slice(0));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (check(row, col)) {
        board[row][col] = "Q";
        dps(row + 1);
        // 回溯，当条件不成立可以往回走
        board[row][col] = ".";
      }
    }
  }
  dps(0);
  return res
}
console.log(queens(8))
