let tree = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 2,
    right: {
      val: 9,
    },
  },
};
var largestValues = function (root) {
  if (!root) return;
  let res = []
  let queue = [root]
  while(queue.length) {
    let subRes = []
    let len = queue.length
    while(len>0) {
      let node = queue.shift()
      subRes.push(node.val)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
      len--
    }
    res.push(Math.max(...subRes))
  }
  return res
};
console.log(largestValues(tree))
