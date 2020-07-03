let arr = [3,2,12,23,23,54,66,54,33]

function bubble(arr){
  let len = arr.length
  for(let i = 0; i < len - 1; i++){
    for(let j = 0; j < len - i - 1; j++){
      if(arr[j]>arr[j+1]){
        // let temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  console.log(arr)
  return arr
}
bubble(arr)