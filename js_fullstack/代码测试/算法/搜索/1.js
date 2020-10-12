var object = { 'a': [{ 'b': { 'c': 3 } }] };
get(object, 'a[0].b.c');

//应该返回 3
function get(obj,str) {
  let reg1 = /\[/g
  let reg2 = /\]/g
  str = str.replace(reg1,'.')
  str = str.replace(reg2,'')
  let arr = str.split('.')
  console.log(arr)
  for(let i = 0; i < arr.length; i++) {
    obj = obj[arr[i]]
  }
  console.log(obj)
  return obj
}