/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const flipBinaryTree = function(root, leaf) {
  function flip(node, from_node){
    // set and break pointers between node and from_node
    const p = node.parent
    node.parent = from_node
    if (node.left === from_node) node.left = null
    if (node.right === from_node) node.right = null

    // stopping condition
    if (node === root) return node

    // set right child
    if (node.left) node.right = node.left
    // set left child
    node.left = flip(p, node)
    return node
  }
  return flip(leaf, null)
};
