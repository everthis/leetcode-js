/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = function(grid) {
  const tree = m => {
    const node = new Node()
    const isAllOne = m.every(r => r.every(v => v === 1))
    const isAllZero = m.every(r => r.every(v => v === 0))
    if (isAllOne) {
      node.val = true
      node.isLeaf = true
    } else if (isAllZero) {
      node.val = false
      node.isLeaf = true
    } else {
      const len = m.length
      let left = m.map(r => r.slice(0, len / 2))
      let right = m.map(r => r.slice(len / 2))
      node.topLeft = tree(left.slice(0, len / 2))
      node.topRight = tree(right.slice(0, len / 2))
      node.bottomLeft = tree(left.slice(len / 2))
      node.bottomRight = tree(right.slice(len / 2))
      node.isLeaf = false
      node.val = true
    }
    return node
  }
  return tree(grid)
}
