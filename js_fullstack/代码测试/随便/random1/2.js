function fn(str) {
  let reg = /[A-Z]/g
  str = str.replace(reg,'1')
  let big = 0,small = 0
  for (const s of str) {
    if(str[s]==='1'){
      big++
    }
  }
  small = str.length - big
let res = Math.abs(small - big) / 2
return res
}

console.log(fn("AAAb"))