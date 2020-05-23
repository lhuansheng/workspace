/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  function middle(node) {
    if (!node) return;
    middle(node.left);
    let val = node.val;
    res.push(val);
    middle(node.right);
  }
  middle(root);
  return res;
};
