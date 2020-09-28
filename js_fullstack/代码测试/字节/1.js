var addStrings = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let len = Math.max(len1,len2)
  let res = ''
  let exceed = 0
  for(let i = len1-1,j = len2-1; i>=0||j>=0; j--,i--) {
    let n1 = num1[i]?num1[i]:0
    let n2 = num2[j]?num2[j]:0
   
    let val = parseInt(n1)+parseInt(n2) + exceed
    res = parseInt(val%10) + res
    // console.log(val+'   1111')
    exceed = parseInt(val/10)
  }
  if(exceed>0) {
    res = exceed + res
  }
  return res
};
console.log(addStrings('0','9'))