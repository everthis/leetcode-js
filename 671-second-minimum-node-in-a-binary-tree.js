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
const findSecondMinimumValue = function(root) {
  if(root == null) return -1
  const q = [root]
  let min = Number.MAX_VALUE
  let min2nd = Number.MAX_VALUE
  while(q.length) {
    const len = q.length
    for(let i = 0; i < len; i++) {
      const cur = q.shift()
      if(cur.val <= min) {
        min = cur.val
      } else if(cur.val > min && cur.val < min2nd) {
        min2nd = cur.val
      }
      if(cur.left) q.push(cur.left)
      if(cur.right) q.push(cur.right)
    }
  }
  return min2nd === Number.MAX_VALUE ? -1 : min2nd
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
const findSecondMinimumValue = function (root) {
  if (root === null) return -1;
  if (root.left === null && root.right === null) return -1;
  let left = root.left.val;
  let right = root.right.val;
  if (left === root.val) {
    left = findSecondMinimumValue(root.left);
  }
  if (right === root.val) {
    right = findSecondMinimumValue(root.right);
  }
  if (right !== -1 && left !== -1) {
    return Math.min(left, right);
  }
  if (right === -1) {
    return left;
  }
  if (left === -1) {
    return right;
  }
};
