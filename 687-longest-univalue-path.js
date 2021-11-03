
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
 * @return {number}
 */
const longestUnivaluePath = function(root) {
  let res = 0
  dfs(root)
  return res

  function dfs(node) {
    if(node == null) return 0
    let left = dfs(node.left), right = dfs(node.right)
    if(node.left && node.left.val === node.val) left++
    else left = 0

    if(node.right && node.right.val === node.val) right++
    else right = 0

    res = Math.max(res, left + right)
    return Math.max(left, right)
  }
};

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
