/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const lcaDeepestLeaves = function(root) {
  if (root === null) return null
  const getHeight = root => {
    if (root === null) return 0
    const res = Math.max(getHeight(root.left), getHeight(root.right)) + 1
    return res
  }
  if (getHeight(root.left) === getHeight(root.right)) {
    return root
  } else if (getHeight(root.left) > getHeight(root.right)) {
    return lcaDeepestLeaves(root.left)
  } else {
    return lcaDeepestLeaves(root.right)
  }
}

// BFS

const lcaDeepestLeaves = function(root) {
  let current = [root];
  let level = 0;
  let last = [];
  while(current.length) {
    let next = [];
    for (var i = 0; i < current.length; i++) {
      if (current[i].left) {
        current[i].left.parent = current[i];
        next.push(current[i].left);
      }
      if (current[i].right) {
        current[i].right.parent = current[i];
        next.push(current[i].right);
      }
    }
    last = current;
    current = next;
  }
  let parent = last[0].parent;
  if (!parent) {
    return last[0];
  }
  while(last.length > 1) {
    let next = [];
    for (var i = 0; i < last.length; i++) {
      newParent = last[i].parent;
      if (!next.includes(newParent)) {
        next.push(newParent);
      }
    }
    last = next;
  }
  return last[0]; 
};
