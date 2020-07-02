function createPhoneNumber(numbers) {
  return (
    `(${numbers[0]}${numbers[1]}${numbers[2]})`
  )
}
console.log(createPhoneNumber([2,1,3,1,2,4,7,6,9,4]))