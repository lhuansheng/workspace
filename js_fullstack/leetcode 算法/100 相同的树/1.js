var isSameTree = function (p, q) {
  function preOrder(node, node1) {
    if (!node && !node1) return true;
    if (!node || !node1) return false;
    let val = node.val,
      val1 = node1.val;
    if (val != val1) return false;
    // 叶子节点
    return preOrder(node.left, node1.left) && preOrder(node.right, node1.right);
  }
  return preOrder(p, q);
};
let tree = {
  val: "1",
  left: {
    val: 2,
  },
  right: {
    val: "2",
    left: {
      val: "3",
    },
  },
};
let tree1 = {
  val: "1",
  left: {
    val: 2,
  },
  right: {
    val: "2",
    left: {
      val: "3",
    },
  },
};
console.log(isSameTree(tree, tree1));
