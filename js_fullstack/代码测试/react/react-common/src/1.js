function n(A,B,C) {
   let lenB = B.length;
   let lenC = C.length;
   let i = 0
   while(i <= A.length - lenB){
    if(A[i]===B[0]) {
      if(A.slice(i,lenB+i)===B){
        A = A.slice(0,i)+C+A.slice(lenB+i)
        i = lenC - 1 + i
      }
    }
    i++
   }
   console.log(A)
   return A
   }
   
  

n('aabb c aa ba bb bb a babbd','bb','k')