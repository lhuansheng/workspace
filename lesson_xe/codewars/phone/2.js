function createPhoneNumber(numbers) {
  // arr.join('')
  // \d{3} \d{3} \d{4}  [0-9]
  // 填进去

  // 代码的语义连贯且易读
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}
console.log(createPhoneNumber([2,1,3,1,2,4,7,6,9,4]))