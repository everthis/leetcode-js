/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function(t) {
  if (!t) return ''
  const left = tree2str(t.left)
  const right = tree2str(t.right)
  if (right) return `${t.val}(${left})(${right})`
  else if (left) return `${t.val}(${left})`
  else return `${t.val}`
};
