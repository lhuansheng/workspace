var findKthLargest = function(nums, k) {
  let i = 0, j=nums.length-1
  // 基准值 -> index
  let index = partition(nums,i,j)
  // 基准 是不是 第k个
  k=nums.length -k
  while(index !== k){
    if(index<k){
      i=index+1
    }
    else{
      j=index-1
    }
    index = partition(nums,i,j)
  }
  return nums[index]
};

function partition(nums,left,right){
  let provit = nums[left]
  let i = left;
  let j=right
  while(left<right){
    while(left<right&&nums[right]>=provit) right --;
    nums[left] = nums[right]
    while(left<right&&nums[left]<=provit) left++;
    nums[right] = nums[left]
  }
  nums[left] = provit
  return left
}