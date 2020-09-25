// 写一个本来就是柯里化的函数
// 感觉没有前面一个通用
function generateName(prefix) {  
  return function(type) {
      return function (itemName) {
          return prefix + type + itemName
      }    
  }
}
// 生成大卖网商品名专属函数
var salesName = generateName('大卖网')

// “记住”prefix，生成大卖网母婴商品名专属函数
var salesBabyName = salesName('母婴')

// "记住“prefix和type，生成洗菜网生鲜商品名专属函数
var vegFreshName = generateName('洗菜网')('生鲜')

// 输出 '大卖网母婴奶瓶'
console.log(salesBabyName('奶瓶'))
// 输出 '洗菜网生鲜菠菜'
console.log(vegFreshName('菠菜'))
// 啥也不记，直接生成一个商品名
var itemFullName = generateName('洗菜网')('生鲜')('菠菜')