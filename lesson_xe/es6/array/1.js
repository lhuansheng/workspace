const ages = [32, 15, 19, 12];

// for(let age of ages){
//     if(age>=18){
//         nums.push(age)
//     }
// }
// console.log(nums)

// const n =
// ages.map((nums) => {
//    return nums>=18
// })
// console.log(n)

// ages 数组, filter 语义化的 过滤

// 1. 计数 for 机器化
// 2. 表述性好一些 forEach 函数式编程 提升可读性
const adultArr = ages.filter((age) => age >= 18);

const adultPresent = ages.some((age) => age >= 18); //只要有一个就返回true


const allOldEnough = ages.every((age) => age >= 18)
console.log(allOldEnough);