/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findFrequentTreeSum = function(root) {
  if (root == null) return [];
  const valArr = [];
  calc(root, valArr);
  const hash = {};
  valArr.forEach((el, idx) => {
    if (hash.hasOwnProperty(el)) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });
  const arr = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  const max = arr[0][1];
  const res = [+arr[0][0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] === max) {
      res.push(+arr[i][0]);
    } else {
      return res;
    }
  }
  return res;
};

function calc(node, arr) {
  let sum = 0;
  if (node.left) {
    sum += calc(node.left, arr);
  }
  if (node.right) {
    sum += calc(node.right, arr);
  }
  sum += node.val;
  arr.push(sum);
  return sum;
}
