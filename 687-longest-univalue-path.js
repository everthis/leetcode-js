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
const getCount = function(root, longest) {
  if (!root) {
    return 0;
  }
  let leftCount = getCount(root.left, longest);
  let rightCount = getCount(root.right, longest);
  if (root.left && root.left.val === root.val) {
    leftCount++;
  } else {
    leftCount = 0;
  }
  if (root.right && root.right.val === root.val) {
    rightCount++;
  } else {
    rightCount = 0;
  }
  longest.max = Math.max(longest.max, leftCount + rightCount);
  return Math.max(leftCount, rightCount);
};

const longestUnivaluePath = function(root) {
  let longest = { max: 0 };
  getCount(root, longest);
  return longest.max;
};
