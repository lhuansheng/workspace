/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return new RegExp('^' + p + '$').test(s)
  //return /^p$/.test(s)  //因为传进来的值有双引号，所以这个用不了
 };