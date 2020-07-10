function coin(n) {
  // Return all possible combinations in alphabetic order
  let arr = [];
  let tempArr = ["H", "T"];
  let times = 2 * Math.pow(2, n);
  if (times === 2) {
    return tempArr;
  }
  for (let k = 1; k < n; k++) {
    for (let i = 0; i < 2; i++) {
      let len = tempArr.length;
      for (let j = 0; j < len; j++) {
        if (i === 1) {
          arr.push("T"+tempArr[j] );
        } else {
          
          arr.push("H" + tempArr[j]);
        }
      }
    }
    tempArr = arr.splice(0);
  }
  return tempArr;
}
console.log(coin(3));
