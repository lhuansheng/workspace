// version1 = "7.5.2.4", version2 = "7.5.3"
var compareVersion = function(version1, version2) {
  let v1=version1.split(".");
  let v2=version2.split(".");
  let len = Math.max(v1.length,v2.length)
   for(let i = 0; i<len; i++){
       let a = v1[i] || 0
       let b = v2[i] || 0
       if(a*1 > b*1) return 1
       else if(a*1<b*1) return -1
   }
   return 0
  
};


// 以 从小到大 为例：
// 
['1.1.1.1.1.1', '6', '5.4.3', '2.3.1', '2.3.1.1', '2.3.1.0', '5.4.3.2'].sort(compareVersion)
// 输出：
["1.1.1.1.1.1", "2.3.1", "2.3.1.0", "2.3.1.1", "5.4.3", "5.4.3.2", "6"]
[1,2,3,4,2,4,1].sort((a,b)=> a-b)
