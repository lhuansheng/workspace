/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // str = str.trim();
    //   let re = /^[-\+]?[0-9]+/;
    //   str = str.match(re);
      let number=parseInt(str)
      if(isNaN(number)){
          return 0
      }
      if (str) {
          if(number>Math.pow(2,31)-1){
              return Math.pow(2,31)-1
          }
          else if(number<-Math.pow(2,31)){
              return -Math.pow(2,31)
          }
        else{
            return number
        }
        
      }
      return 0;
    };