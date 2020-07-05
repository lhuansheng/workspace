// 广度优先
function minDepth(root) {
  if (root === null) return 0;
  let level = 0;
  let queue = [root]
  while(queue.length){
    level++;
    let rowNodes = queue.splice(0)
    for(let node of rowNodes){
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    
  }
  return level
}



