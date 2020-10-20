// 字节面试算法 每次调用一次add 第K返回第k大的元素，将值插入
let list = [3, 2, 4, 1, 5] 
let k = 3
list.sort((a,b)=>a-b)
function add(num) {
  let left = 0, right = list.length - 1
  while(left<right) {
    let mid = Math.floor((left+right) / 2)
     if(list[mid]>num) {
      right = mid - 1
    }
    else if(list[mid]<num) {
      left = mid + 1
    }
    else if(list[mid]===num) {
      left = mid 
      break;
    }
  }
  if(list[left]<num) {
    list.splice(left+1,0,num)
  }
  else{
    list.splice(left,0,num)
  }
  console.log(list)
  return list[list.length - k]
}
console.log(add(2.2))