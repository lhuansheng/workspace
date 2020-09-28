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
    let subTree = queue.splice(0)
    let subRes = []
    for (let i = 0; i < subTree.length; i++) {
      subRes.push(subTree[i].val)
      if(subTree[i].left) {
        queue.push(subTree[i].left)
      }
      if(subTree[i].right) {
        queue.push(subTree[i].right)
      }
    }

    res.push(Math.max(...subRes))
  }
  return res
};
console.log(largestValues(tree))
