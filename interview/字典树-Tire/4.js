str = '2020-12-13'
function format(str){
let reg = /(\d+)-(\d+)-(\d+)/
  // str = str.replace(reg,'$2-$3.$1')
  str = str.replace(reg,(...arg) => {
    console.log(arg[0])
    return `${arg[2]+'-'+arg[3]+'.'+arg[1]}`
  })
  console.log(str)
}
format(str)