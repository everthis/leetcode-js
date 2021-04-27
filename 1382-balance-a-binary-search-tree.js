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
 * @return {TreeNode}
 */
const balanceBST = function(root) {
  const arr = []
  inOrder(root, arr)
  return constructBST(arr, 0, arr.length - 1)
};

function inOrder(node, arr) {
  if(node == null) return
  inOrder(node.left, arr)
  arr.push(node.val)
  inOrder(node.right, arr)
}

function constructBST(arr, start, end) {
  if(start > end) return null
  const mid = start + ((end - start) >> 1)
  const node = new TreeNode(arr[mid])
  node.left = constructBST(arr, start, mid - 1)
  node.right = constructBST(arr, mid + 1, end)
  return node
}
