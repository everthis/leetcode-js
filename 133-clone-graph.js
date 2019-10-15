/**
 *   - if(!node) return node. Graphs can also have null neighbors
 *   - using a Set doesn't work because we are dealing with objects not primitives
 *       - and when encountering an already-cloned node, you are supposed to return the copied node
 *       (otherwise you are linking back to the original)
 *       - so, map = {} is correct
 *   - the only "trick" is that you must set the current node as "already copied" before DFS-ing its neighbors
 *   - declaring new variable for copying a node is actually extra O(n) space
 */

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function(node) {
  if (!node) return node
  const map = {}
  return traverse(node)
  function traverse(node) {
    if(!node) return node;
    if (!map[node.val]) {
      const newNode = new Node(node.val)
      map[node.val] = newNode
      newNode.neighbors = node.neighbors.map(traverse)
    }
    return map[node.val]
  }
}
