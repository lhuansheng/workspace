
function zip(a,b,c) {
  // todo

  console.log(arguments)
  let res=[]
 
  for(let j = 0; j<arguments[0].length; j++){
    if(!res[j]) res[j] = []
    for(let i = 0; i <arguments.length; i++){
      res[j].push(arguments[i][j])
      
    }
    
  }
  return arr
}
console.log(zip(['fred', 'barney'], [30, 40], [true, false]))
// => [['fred', 30, true], ['barney', 40, false]]
