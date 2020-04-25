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
  var fisrtStr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].substring(0, fisrtStr.length) != fisrtStr) {  
      fisrtStr = fisrtStr.substring(0, fisrtStr.length - 1);
      tempStr = fisrtStr;
      if ((fisrtStr.length == 0)) {
        return "";
      }
    }
    tempStr = fisrtStr;
  }
console.log(tempStr);

  return tempStr;
};
longestCommonPrefix(["c", "c", "c"]);
