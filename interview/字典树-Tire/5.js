str = 'background-color-aaa-bbb'
function change(str){
  let reg = /-([a-z]{1})/ig
  str = str.replace(reg,(...arg)=>{
    // console.log(arg)
    return arg[1].toUpperCase()
  })
  // str = str.replace(reg,'$1'+'$3'.toUpperCase()+'$4')
  console.log(str)
 
}

function change1(str){
  let reg = /-([a-z]{1})/ig
  str = str.replace(reg,'$1'.toUpperCase())
  // str = str.replace(reg,'$1'+'$3'.toUpperCase()+'$4')
  console.log(str)
 
}

change1(str)