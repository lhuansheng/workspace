/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let len = M.length
    let res = len
    let friend = []
    for(let i = 0; i < res; i ++){
      friend[i] = i
    }
    let union = (s, d)=>{
      for(let i in friend){
        if(friend[i] === s ){
          friend[i] = d
        }
      }
    }

    for(let i = 0; i< len; i++){
      for(let j = i + 1; j < len; j ++){
        if(M[i][j] === 1){
          if( friend[i] != friend[j]){
            res --
            union(friend[i],friend[j])
          }
        }
      }
    }
    return res
};