function partition(nums,left,right){
  if(left >= right) return; 
  let provit = nums[left]
  let i = left;
  let j=right
  while(left<right){
    // left right 互相换
    // right 替换 left 位置
    // left 替换 right 位置
    //  1： 右边扫描，比基准值小数，如果这个数
    while(left<right&&nums[right]>=provit) right --;
    nums[left] = nums[right]
    while(left<right&&nums[left]<=provit) left++;
    nums[right] = nums[left]
  }
  nums[left] = provit
  // return left
  partition(nums,i,left-1)
  partition(nums,left+1,j)
}
const arr=[8,9,7,-1,5]
// partition(arr,0,arr.length-1)

const quickSort = function(arr){
  partition(arr,0,arr.length-1)
}
quickSort(arr)
console.log(arr)
// partition(nums,0,length-1)
// partition(nums,0,length-1 /2)
// partition(nums,length-1,length-1 /2)
