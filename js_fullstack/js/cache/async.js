const { resolve } = require("path");

function resolveAfterTwoSeconds(x) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(x)
    }, 2000);
  })
}
async function f1(){
  // 方法1
  let x = await resolveAfterTwoSeconds(10)
  console.log(x)
  // 方法2
  resolveAfterTwoSeconds(10)
  .then((x)=>{
    console.log(x)
  })
}
f1()