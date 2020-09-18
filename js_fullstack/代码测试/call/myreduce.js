let arr = [1,2,3,4]
// pre 永远指前面的累计数，如果累计数不变，则pre不变
// console.log(arr.reduce((pre,cur)=> pre*3))

// TypeError: Reduce of empty array with no initial value
Array.prototype.myReduce = function(fn,initialval) {
if(typeof fn !== 'function'){
        throw new TypeError("arguments[0] is not a function");//TypeError是错误的类型之一：类型错误
    }
  let pre,i

  if(initialval!=null) {
    pre = initialval
    i=0
  } 
  else if(this[0]!==null){
    pre = this[0]
    i=1
  }
  else {
    throw new Error('TypeError: Reduce of empty array with no initial value')
    return;
  }
  
  for (i; i < this.length; i++) {
    pre = fn(pre,this[i],i,this)
  }
  return pre
}
console.log(arr.myReduce((pre,cur)=> pre+cur,0))