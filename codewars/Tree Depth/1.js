let tree = { a: 1, b: 2, c: { d: { e: 3 } } }
let t = { a: 1,
  b: 2,
  }
// 递归的特性是什么，每一层都有相似的遍历
let count = -1
function recordDepth(tree) {
  if(Object.prototype.toString.call(tree) !== '[object Object]'){
    return null
  }
  if (JSON.stringify(tree) === '{}') {
    return { depth: 0 } // 如果为空,返回false
}
  count++
  for (const key in tree) {
    if (tree.hasOwnProperty(key)) {
      tree.depth= count
      const element = tree[key];
      if(typeof element=='object'){
        recordDepth(element)
        return tree
        
      }
    }
    
  }
  return tree
}
console.log(recordDepth(t))
// console.log(typeof [23])
