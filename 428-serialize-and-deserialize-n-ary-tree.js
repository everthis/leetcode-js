/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}
  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function(root) {
    if (root === null) return ''
    let str = ''
    function dfs(node) {
      str += node.val + ',' + node.children.length + ','
      for (let child of node.children) dfs(child)
    }
    dfs(root)
    return str
  }
  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function(data) {
    if (data === '') return null
    let idx = 0
    function input() {
      let j = data.indexOf(',', idx)
      let n = Number(data.slice(idx, j))
      idx = j + 1
      return n
    }
    function dfs() {
      let val = input(),
        len = input()
      let node = new Node(val, [])
      while (len-- > 0) node.children.push(dfs())
      return node
    }
    return dfs()
  }
}
// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
