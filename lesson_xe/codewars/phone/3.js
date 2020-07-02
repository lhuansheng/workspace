function createPhoneNumber(numbers) {
  // arr.join('')
  // \d{3} \d{3} \d{4}  [0-9]
  // 填进去
  numbers = numbers.join('')
  // 编程风格 
  return `(${numbers.substring(0,3)}) ${numbers.substring(3,6)}-${numbers.substring(6)}`
}
console.log(createPhoneNumber([2,1,3,1,2,4,7,6,9,4]))