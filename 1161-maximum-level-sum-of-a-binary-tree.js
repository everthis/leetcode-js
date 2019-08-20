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
const maxLevelSum = function(root) {
  if (root == null) return 0
  let res = 1
  let cur = [root]
  let next = []
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0
  let level = 1
  while (cur.length) {
    let node = cur.pop()
    if (node.left) next.push(node.left)
    if (node.right) next.push(node.right)
    sum += node.val
    if (cur.length === 0) {
      cur = next
      next = []
      if (sum > max) {
        res = level
        max = sum
      }
      sum = 0
      level++
    }
  }

  return res
}

// DFS

const maxLevelSum = function(root) {
  let result = {};
  let recursion = function(root, level) {
    if (result[level] !== undefined) {
      result[level] += root.val;
    } else {
      result[level] = root.val;
    }
    if (root.left !== null) {
      recursion(root.left, level + 1);
    }
    if (root.right !== null) {
      recursion(root.right, level + 1);
    }
  };
  recursion(root, 1);
  let resultkey = 1;
  let max = Number.MIN_VALUE;
  for (let key of Object.keys(result)) {
    if (result[key] > max) {
      max = result[key];
      resultkey = key;
    }
  }
  return Number(resultkey);
};

