/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let x1=x
    let temp = 0
    let val = 0
    if(x<0){
        return false
    }
    if(x<10){
        return true
    }
    
    while(x1>0){
        temp = x1%10
        x1 = parseInt(x1/10)
        val = val*10+temp
    }
    if(val===x){
        return true
    }
    return false
};
console.log(isPalindrome(1221))