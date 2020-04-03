/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = function (root, v, d, level = 1) {
  if (d === 1) {
    const node = new TreeNode(v)
    node.left = root
    return node
  }
  const queue = []
  queue.push(root)
  let depth = 1
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()
      if (depth === d - 1) {
        let left = new TreeNode(v)
        let right = new TreeNode(v)
        left.left = cur.left
        right.right = cur.right
        cur.left = left
        cur.right = right
      } else {
        if (cur.left !== null) {
          queue.push(cur.left)
        }
        if (cur.right !== null) {
          queue.push(cur.right)
        }
      }
    }
    depth++
  }
  return root
}

// another

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = function (root, v, d, level = 1) {
  if (!root) return
  if (d === 1) {
    const newRoot = new TreeNode(v)
    newRoot.left = root
    return newRoot
  } else if (d === level + 1) {
    const oldLeft = root.left
    const oldRight = root.right
    root.left = new TreeNode(v)
    root.right = new TreeNode(v)
    root.left.left = oldLeft
    root.right.right = oldRight
  } else {
    addOneRow(root.left, v, d, level + 1)
    addOneRow(root.right, v, d, level + 1)
  }
  return root
}
