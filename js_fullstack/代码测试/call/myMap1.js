let arr = [1,2,3]
Array.prototype.myMap = function(fn) {
  // 注意 reduce需要有个返回值
  return this.reduce((pre,cur,i,arr) => {
   return pre.concat(fn(cur,i,arr))
  },[])
}

 console.log(arr.myMap((item,i)=>{
   return item+'bbb' + i + arr
 }))