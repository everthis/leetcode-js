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
const averageOfLevels = function(root) {
  const res = [];
  layer(res, [root]);
  return res.map(el => el.val / el.num);
};

function layer(arr, args) {
  const item = {
    val: args.reduce((ac, el) => ac + el.val, 0),
    num: args.length
  };
  arr.push(item);
  const children = [];
  args.forEach(el => {
    el.left === null ? null : children.push(el.left);
    el.right === null ? null : children.push(el.right);
  });
  if (children.length) {
    layer(arr, children);
  }
}
