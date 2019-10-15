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
    if (!map[node.val]) {
      const newNode = new Node(node.val)
      map[node.val] = newNode
      newNode.neighbors = node.neighbors.map(traverse)
    }
    return map[node.val]
  }
}
