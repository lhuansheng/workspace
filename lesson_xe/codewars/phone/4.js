function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx"
  for(var i = 0; i < numbers.length; i++){
    format = format.replace('x',numbers[i])
  }
  return format
}
console.log(createPhoneNumber([2,1,3,1,2,4,7,6,9,4]))