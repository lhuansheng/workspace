var maxDepth = function (root) {
  let maxlen = 0;
  function help(node, len) {
    if (node) {
      len++;
      if (node.left === null && node.right === null) {
        if (len > maxlen) {
          maxlen = len;
        }
        return
      }
      help(node.left, len);
      help(node.right, len);
    }
  }
  help(root, 0);
  return maxlen;
};
