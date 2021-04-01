function quickSort(nums,left,right) {
  if(left>=right) return; 
  let i = left,j = right,temp = nums[left]
  while(i < j) {
    while(i<j&&nums[j]>=temp)j--
    while(i<j&&nums[i]<=temp)i++
   if(i < j) [nums[i],nums[j]] = [nums[j],nums[i]]
  }
  nums[left] = nums[i]
  nums[i] = temp
  quickSort(nums,left, i-1)
  quickSort(nums,i+1,right)
}
let n = [-2,5,1,0,3,8,5]
quickSort(n,0,n.length - 1)
