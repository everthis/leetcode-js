/**

Given a non-empty binary search tree and a target value,
find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value
in the BST that is closest to the target.

Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

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
 * @param {number} target
 * @return {number}
 */
const closestValue = function(root, target) {
  let res = root.val
  while(root) {
    if(Math.abs(root.val - target) < Math.abs(res - target)) {
      res = root.val
    }
    root = root.val > target ? root.left : root.right
  }
  return res
};

// another

const closestValue = function(root, target) {
  const child = target < root.val ? root.left : root.right;
  if (!child) return root.val;
  const closest = closestValue(child, target);
  return Math.abs(closest - target) < Math.abs(root.val - target)
    ? closest
    : root.val;
};

// another

const closestValue = function(root, target) {
  if(root == null) return -1
  let node = root
  const stack = []
  const res = []
  const K = 1
  while(node || stack.length) {
    if(node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      if(res.length === K) {
        if(Math.abs(res[0] - target) < Math.abs(node.val - target)) {
          return res[0]   
        }
        res.shift()
      }
      res.push(node.val)
      node = node.right
    }
  }
  return res[0]
};
