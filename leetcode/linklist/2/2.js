
    let str1 =  '9'
    let str2 = '9'
   
    let addTwoNumbers = (l1, l2)=>{
      let curr1 = l1,
          curr2 = l2
      // let len1 = l1.length
      // let len2 = l2.length
      let str={head:'',val:''},temp = str
      
   
      // let i = len1-1, j = len2-1
 
      let count = 0
      while(curr1&&curr2){
        let str1char = curr1.val*1
        let str2char = curr2.val*1
        let sum = str1char+str2char +count
        
        
        if(sum<10 ){
          temp.val = sum
          temp = temp.next
        }
        else if(sum+count >=10){
          str = `${(sum+count)%10}` + str
        }
        
      
        count = Math.floor((sum+count)/10)
        if(i === 0 && j === 0){
          str = (count)+str
           break;
        }
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
    addTwoNumbers(str1,str2)