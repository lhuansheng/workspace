function f(n){
    if(n==1) return 1
    if(n==2) return 2

    let ret = 0,
        pre = 2,
        prepare = 1
    // 递归可也优化成循环
    for(let i = 3; i<= n; i++){
        ret = pre + prepare
        prepare = pre
        pre = ret
    }
    return ret
}
console.log(f(45))