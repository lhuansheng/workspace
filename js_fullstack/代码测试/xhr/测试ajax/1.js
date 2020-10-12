let obj = {
  a:1,
  b:2
}
let a = Object.keys(obj).reduce((pre,cur) =>{
  
  return obj[pre]+'&'+obj[cur]
})
console.log(typeof a)