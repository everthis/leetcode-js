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
const rightSideView = function(root) {
  if(root == null) return []
  const queue = [root]
  const res = []
  while(queue.length) {
    const len = queue.length
    for(let i = 0; i < len; i++) {
      const el = queue.shift()
      if(i === len - 1) res.push(el.val)
      if(el.left) queue.push(el.left)
      if(el.right) queue.push(el.right)
    }
  }
  return res
};

// another

const rightSideView = function(root) {
  const res = []
  const helper = function(node, level) {
    if (!node) {
      return
    }
    if (!res[level]) {
      res.push(node.val)
    }
    helper(node.right, level + 1)
    helper(node.left, level + 1)
  }
  helper(root, 0)
  return res
}
