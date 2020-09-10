/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneTree = function(root) {
  if(root == null) return null
  let node = new Node(root.val)
  for(let i = 0, len = root.children.length; i < len; i++) {
    node.children.push(cloneTree(root.children[i]))
  }
  return node
};
