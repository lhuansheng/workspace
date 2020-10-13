let arr = [1,2,3,4,5,6,7,8,9,10]
var search = function(nums, target) {
  let low = 0, high = nums.length - 1;
  while(low < high) {
    let mid = Math.floor((high - low) / 2) + low
    if(nums[mid] > target) {
      high = mid - 1;
    }
    else if(nums[mid] < target) {
      low = mid + 1
    }
    else {
      return mid
    }
  }
  if(nums[low] === target) {
    return low
  } return -1
}
console.log(search(arr,1))