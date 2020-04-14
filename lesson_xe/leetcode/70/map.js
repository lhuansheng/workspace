var m = new Map()  //json{a:b}
m.set(1,'black')

m.set({x:1},3)
let i = 1
m.forEach((item,key, mapObj) =>{
    console.log(item,key,mapObj)
    i++
})
console.log(i) 