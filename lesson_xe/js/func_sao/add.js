//add函数实现两数相加 js
var getSums = function (n1, n2) {
    if(arguments.length<2){
        throw new Error('请传递w,h两个参数')
        return
    }
    if(typeof n1!='number' || typeof n2!='number')
    throw new Error('请输入正确的参数')
    return
    
     return n1 + n2; 
    };


console.log(getSums("d",2))
