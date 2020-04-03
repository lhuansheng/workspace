// leetcode 考试, 程序员能通过他的考试， 算法能力没问题
// 函数就是对一个功能进行封装
//let a = 2; //全局变量

//时间复杂度， n*n = o(n^2)
// var twoSum = function(nums,target){
    // let arr = [];
    // for (let i = 0; i < nums.length; i++){//暴力解法
    //     for (let j =i+1; j<nums.length; j++ ){ //内层循环
    //         if(nums[i] + nums[j] === target){
    //             arr = [i,j];
    //             return arr;
    //         }
    //     }
    // }  
    //局部
    // a = 3;
    // console.log(a);

    //函数体
    // let a = 1;
// }
// twoSum();
// var d=null;
// console.log(typeof d)

const twoSum = function(nums, target){
    let map = {};//对象字面量
    nums.forEach(function(e,i){
        //console.log(e,i);
        map[e] = i;
    })
    for(let i = 0; i < nums.length; i++){
        let j = map[target - nums[i]];
        if(j && j!== i){
            return [i,j];
        }
    }
   
};
console.log(twoSum([2, 7, 11, 15],9))


