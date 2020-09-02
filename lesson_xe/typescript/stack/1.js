// 5 => 101
// 10进制转 2进制
function TenToTwo(num) {
  let sum = 0;
  let exceed = 0;
  while (num > 0) {
    
    res = (num % 2) + sum;
    exceed = num / 2
    num = num / 2;
  }
}
