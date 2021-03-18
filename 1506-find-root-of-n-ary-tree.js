/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
const findRoot = function(tree) {
  let sum = 0
  for(let n of tree) {
    sum += n.val
    for(let c of n.children) {
      sum -= c.val
    }
  }
  for(let n of tree) {
    if(n.val === sum) return n
  }
  return null
};

// another

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
const findRoot = function(tree) {
  let sum = 0
  for(let n of tree) {
    sum ^= n.val
    for(let c of n.children) {
      sum ^= c.val
    }
  }
  for(let n of tree) {
    if(n.val === sum) return n
  }
  return null
};
