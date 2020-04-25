/**
 * @author lhs
 * @date 2020/4/24
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  var tempStr = "";

  if (strs.length == 0) {
    return "";
  }
  if (strs.length == 1) {
    return strs[0];
  }
  var firstStr = strs[0];
  let count = 0;
  for (let i = 1; i <= strs[0].length; i++) {
    var prefix = firstStr.substring(0, i);
    count = 0;
    for (let k = 1; k < strs.length; k++) {
      if (strs[k].substring(0, i) == prefix) {
        count++;
      }
    }
    if (count != 0 && count == strs.length - 1) {
      tempStr = prefix;
    }
  }

  return tempStr;
};
longestCommonPrefix(["flower", "ow", "flight"]);
console.log(tempStr);
