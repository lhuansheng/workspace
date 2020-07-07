
    let str1 =  '9'
let str2 = '9'
// let str1 = '999'
// let str2= '1999'
let addTwoNumbers = (l1, l2)=>{
  
  let len1 = l1.length
  let len2 = l2.length
  let str=''
  
  // for(let i = len1 - 1; i>=0; i++){
  //   for(let j = len2 - 1; j>=0; j++){
      
  //   }
  // }
  let i = len1-1, j = len2-1
  // if(i === 0 && j === 0){
  //   return `${parseInt(l1)+parseInt(l2)}`
  // }
  let count = 0
  while(i>=0&&j>=0){
    let str1char = parseInt(l1.charAt(i))
    let str2char = parseInt(l2.charAt(j))
    let sum = str1char+str2char
    
    
    if(sum+count<10 ){
      str = (sum+count) + str
    }
    else if(sum+count >=10){
      str = `${(sum+count)%10}` + str
    }
    
  
    count = Math.floor((sum+count)/10)
    // 如果都到了最后一位，在最后进一位
    if(i === 0 && j === 0){
      str = (count)+str
       break;
    }
    // 如果 i 先走完，将j 的值直接放进来
    if(i===0){
      str = (parseInt(l2.substring(0,j))+count)+str
      break
     
    }
    if(j===0){
      str = (parseInt(l1.substring(0,i))+count)+str
     break
     
    }
    i--;j--
  }
  console.log(str)
  return str
}
// console.log(10/10)
addTwoNumbers(str1,str2)