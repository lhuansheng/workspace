// 144
var preorderTraversal = function(root) {
  let arr = [];
  function help(node){
   if(node){
    let val = node.val;
    arr.push(val);
    help(node.left)
    help(node.right)
   }
  }
  help(root)
  return arr;
};

let tree = {
  val: '1',
  left:{
    val:null
  },
  right:{
    val:'2',
    left:{
      val:'3',
      left:null,
      right:null
    }
  }
}
console.log(preorderTraversal([ '1', null, '2', '3' ]))