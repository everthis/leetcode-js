/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  if (nums.length == 0) {
    return null;
  }
  const head = helper(nums, 0, nums.length - 1);
  return head;
};

function helper(num, low, high) {
  if (low > high) {
    // Done
    return null;
  }
  let mid = Math.floor((low + high) / 2);
  let node = new TreeNode(num[mid]);
  node.left = helper(num, low, mid - 1);
  node.right = helper(num, mid + 1, high);
  return node;
}
