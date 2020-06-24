var levelOrder = function (root) {
  // if (!root) return [];
  let queue = [root]
  // 下一层的元素, 拿到上一层的所有元素, 遍历上一层的所有元素,取出所有 .left .right
  for(let node of queue){
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }

  // 55:00:00
}