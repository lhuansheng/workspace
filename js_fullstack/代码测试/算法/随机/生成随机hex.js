// #ffcc00
let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
function ran() {
   let str = '#'
   for(let i = 0; i < 6; i++) {
    str+=arr[parseInt(Math.random()*16)]
   }
   return str
}
console.log(ran())