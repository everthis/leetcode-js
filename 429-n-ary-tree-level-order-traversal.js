/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const res = []
  if(root == null) return res
  const q = []
  q.push(root)
  while(q.length) {
    const size = q.length
    const cur = []
    for(let i = 0; i < size; i++) {
      const node = q.shift()
      cur.push(node.val)
      q.push(...node.children)
    }
    res.push(cur)
  }
  return res
};
