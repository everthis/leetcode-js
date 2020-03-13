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

// another

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
    const ans = []
    const stack = root ? [root] : []
    while (stack.length) {
      const cur = stack.pop()
      ans.push(cur.val, cur.children.length)
      for (let i = cur.children.length - 1; i >= 0; i--) {
        stack.push(cur.children[i])
      }
    }
    return ans.join(',')
  }
  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function(data) {
    if (!data) return null
    const arr = data.split(',')
    const helper = (index = 0, parent) => {
      const node = new Node(arr[index++], [])
      parent.children.push(node)
      let childCount = arr[index++]
      while (childCount--) {
        index = helper(index, node)
      }
      return index
    }
    const fakeRoot = new Node(null, [])
    helper(0, fakeRoot)
    return fakeRoot.children[0]
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

