/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return;
  let res = [];
  let queue = [root];

  while (queue.length) {
    let subRes = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      subRes.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res.push(subRes)
  }

  return res;
};
