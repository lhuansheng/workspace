import Stack from './lib/stack'

const decimalToBinary = function(decNumber) {
  const stack = new Stack()
  let number = decNumber
  let rem;
  let binaryString = ''
  while(number > 0) {
    rem = Math.floor(number % 2)
    stack.push(rem)
    number = Math.floor(number / 2)
  }
  while(!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}
console.log(decimalToBinary(3))
// 5%2 = 1
// 5/2 = 2
// 2%2 = 0
// 2/2 = 1
// 1%2 = 1
// 1/2 = 0