/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  let cn = null
  const dfs = function (node) {
    let mid = 0
    if (!node) return false
    let left = dfs(node.left)
    let right = dfs(node.right)
    if (node === p || node === q) {
      mid = 1
    } else {
      mid = 0
    }
    if (mid + left + right >= 2) {
      cn = node
    } else {
      if (mid) return mid
      return left || right
    }
  }
  dfs(root)
  return cn
}

// another

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  let hasP = false, hasQ = false
  const res = LCA(root, p, q)
  return hasP && hasQ ? res : null

  function LCA(root, p, q) {
    if(root == null) return root
    const left = LCA(root.left, p, q)
    const right = LCA(root.right, p, q)
    if(root === p) {
      hasP = true
      return root
    }
    if(root === q) {
      hasQ = true
      return root
    }
    if(left && right) return root
    return left || right
  }
}

