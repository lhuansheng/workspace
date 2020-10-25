function fn(n,p,q,...args) {
  let arr = args
  arrP = arr.slice(0,p)
  arrQ = arr.slice(p)
  let resp= 0,  resq = 0, resc = 0
  for (const item of arrP) {
    if(arrQ.includes(item)){
      resc++
    }
  }
  resp = arrP.length - resc
  resq = arrQ.length - resc
  return [resp,resq,resc]
}
console.log(fn(5,3,3,1,2,3,3,4,5))