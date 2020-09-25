let arr = [1,2,3]
// console.log(arr.map((item,i)=>{
//    return `<a>${item}</a>`
//  }))
Array.prototype.myMap = function(fn) {
  // this代表 arr
  let len = this.length
  let arr = []
  for (let i = 0; i < len; i++) {
    // 回调   
    arr.push(fn(this[i],i,this))
  }
  return arr
}

 console.log(arr.myMap((item,i)=>{
   return item+'bbb'
 }))