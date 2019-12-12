/**

Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example :

Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countUnivalSubtrees = function(root) {
  let res = { num: 0 }
  chk(root, null, res)
  return res.num
}

function chk(node, pVal, obj) {
  if (node == null) return true
  const left = chk(node.left, node.val, obj)
  const right = chk(node.right, node.val, obj)
  if (left && right) {
    obj.num++
    return pVal == null ? true : pVal === node.val
  }
  return false
}
