/**

Given a non-empty binary search tree and a target value,
find k values in the BST that are closest to the target.

Note:

Given target value is a floating point.
You may assume k is always valid, that is: k ≤ total nodes.
You are guaranteed to have only one unique set of k values
in the BST that are closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286, and k = 2

    4
   / \
  2   5
 / \
1   3

Output: [4,3]
Follow up:
Assume that the BST is balanced, could you solve it in
less than O(n) runtime (where n = total nodes)?

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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
const closestKValues = function(root, target, k) {
  const res = []
  let node = root
  const stack = []
  while (node || stack.length) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      if (res.length === k) {
        if (Math.abs(res[0] - target) <= Math.abs(node.val - target)) {
          return res
        }
        res.shift()
      }
      res.push(node.val)
      node = node.right
    }
  }
  return res
}
