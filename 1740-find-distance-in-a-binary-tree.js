/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
const findDistance = function (root, p, q) {
  if (p == q) return 0
  let result = -1
  dfs(root, p, q)
  return result

  /**
		The return value means the distance from root node to EITHER p OR q. If
		neither p nor q are reachable from the root, return -1.
		
		It is either p or q but not both, because if the root node can reach both 
		p and q, it is a common ancestor of p and q and the answer should already 
		be available.
	**/
  function dfs(root, p, q) {
    if (root == null) return -1

    let left = dfs(root.left, p, q)
    let right = dfs(root.right, p, q)

    if (root.val == p || root.val == q) {
      // root is p or q, but none of p or q is a descendent of root.
      // The distance from root to one of p and q is 0 in this case.
      if (left < 0 && right < 0) {
        return 0
      }

      // root is p or q, and root is also the LCA of p and q.
      result = 1 + (left >= 0 ? left : right)
      return -1
    }

    // root is neither p nor q, but it is the LCA of p and q.
    if (left >= 0 && right >= 0) {
      result = left + right + 2
      return -1
    }

    if (left >= 0) {
      return left + 1
    }

    if (right >= 0) {
      return right + 1
    }

    return -1
  }
}
