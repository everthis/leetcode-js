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
  let node1, node2;
  let prev = new TreeNode(-Infinity);
  traverse(root);
  swap(node1, node2)
    
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (node.val < prev.val) {
      node2 = node;
      if (!node1) node1 = prev;
    }
    prev = node;
    traverse(node.right);
  }

  function swap(node1, node2) {
    let temp = node1.val
    node1.val = node2.val
    node2.val = temp
  }
}

// another

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
