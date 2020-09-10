/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @param {Node} p
 * @param {Node} q
 * @return {Node}
 */
function moveSubTree(root, p, q) {
  for (let node of q.children) {
    if (p === node) {
      return root
    }
  }
  if (find(p, q)) {
    update(root, p, q)
    q.children.push(p)
    return root === p ? q : root
  } else {
    update(root, null, p)
    q.children.push(p)
    return root
  }
  function update(root, p, q) {
    if (root == null) {
      return
    }
    for (let node of root.children) {
      update(node, p, q)
    }
    for (let i = 0; i < root.children.length; i++) {
      if (root.children[i] === p) {
        root.children[i] = q
      } else if (root.children[i] === q) {
        root.children.splice(i, 1)
      }
    }
  }
  function find(root, t) {
    if (root == null) {
      return false
    }
    let ret = root === t
    if (ret === true) {
      return true
    }
    for (let node of root.children) {
      ret = ret || find(node, t)
    }
    return ret
  }
}
