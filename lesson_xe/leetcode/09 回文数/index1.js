/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let x1 = x.toString();

  let idx1 = 0,
    idx2 = x1.length - 1;
  while (idx1 <= idx2) {
    if (x1.charAt(idx1) === x1.charAt(idx2)) {
      idx1++;
      idx2--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(121));
