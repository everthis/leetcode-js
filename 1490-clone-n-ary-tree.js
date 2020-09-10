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

// another

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
  if (root === null) return null
  const Q = []
  const rootCopy = new Node(root.val)
  Q.push([root, rootCopy])
  while (Q.length) {
    const temp = Q.shift()
    const node = temp[0]
    const copy = temp[1]
    node.children.forEach((child) => {
      const copyChild = new Node(child.val)
      copy.children.push(copyChild)
      Q.push([child, copyChild])
    })
  }

  return rootCopy
};
