var invertTree = function(root) {
  function help(node){
   if(node){
    [node.left,node.right]=[node.right,node.left]
    help(node.left)
    help(node.right)
   }
  }
  help(root)
  return root;
};