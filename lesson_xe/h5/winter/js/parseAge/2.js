function parseAge(str){
  if(typeof str!='string' && typeof str!='number'){
    return NaN;
  }
  str = String(str).trim().split(".")[0]
  
}
