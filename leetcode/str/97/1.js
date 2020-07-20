/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
var isInterleave = function(s1, s2, s3) {
  let i = 0, j = 0
  for( str of s3){
     if(s1[i]===str){
         i++
     }
     else if(s2[j]===str){
         j++
     }
     else{
         return false
     }
  }
  return true
};
console.log(isInterleave(s1,s2,s3))