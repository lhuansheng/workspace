// 长方形面积的函数
/**
 * 
 * @param {number} w 
 * @param {number} h 
 */
function area1(w,h){ //es5
    if(arguments.length<2){
        throw new Error('请传递w,h两个参数')
        return
    }
    if(typeof w!='number' || typeof h!='number')
    throw new Error('请输入正确的参数')
    return w*h
}
console.log(area1('dd','ddd'))

// var area2 = function(w,h){//匿名函数
//     return w*h
// }

//let area3 = (w,h)=>w*h    //es6

// 有什么问题不? 
