str = '黄红蓝蓝黄红'
arr = str.split('')
let obj = {'红':0,'黄':1,'蓝':2}
arr.sort((a,b)=> obj[a] - obj[b])
console.log(arr.join(''))