/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {
  const eNodes = [];
  if (root == null) return;
  let current = root;
  let pre;
  let previous = null;
  while (current != null) {
    if (current.left == null) {
      if (previous != null && previous.val > current.val) {
        eNodes.push(previous);
        eNodes.push(current);
      }
      previous = current;
      current = current.right;
    } else {
      pre = current.left;
      while (pre.right != null && pre.right.val != current.val) {
        pre = pre.right;
      }

      if (pre.right == null) {
        pre.right = current;
        current = current.left;
      } else {
        if (previous != null && previous.val > current.val) {
          eNodes.push(previous);
          eNodes.push(current);
        }
        pre.right = null;
        previous = current;
        current = current.right;
      }
    }
  }
  if (eNodes.length == 2) {
    pre = eNodes[0];
    current = eNodes[1];
  } else {
    pre = eNodes[0];
    current = eNodes[3];
  }
  let temp = pre.val;
  pre.val = current.val;
  current.val = temp;
};
