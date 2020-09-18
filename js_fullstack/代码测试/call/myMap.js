let arr = [1,2,3]
// console.log(arr.map((item,i)=>{
//    return item+'aaa'
//  }))
Array.prototype.myMap = function(fn) {
  let len = this.length
  let arr = []
  for (let i = 0; i < len; i++) {
    arr.push(fn(this[i],i,this))
  }
  return arr
}

 console.log(arr.myMap((item,i)=>{
   return item+'bbb'
 }))