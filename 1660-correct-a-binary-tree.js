/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
const correctBinaryTree = (root, seen = new Set(), found = false) => {
  const go = (root) => {
    seen.add(root)
    if (root.right && seen.has(root.right)) {
      found = true
      return null
    }
    if (!found && root.right) root.right = go(root.right)
    if (!found && root.left) root.left = go(root.left)
    return root
  }
  return go(root)
}

// another

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
const correctBinaryTree = function(root) {
  let q = [root]
  let target
  while(q.length) {
    const size = q.length
    const next = new Set()
    const row = new Set()
    for(let i = 0; i < size; i++) {
      const cur = q.shift()
      row.add(cur)
      if(cur.left) next.add(cur.left)
      if(cur.right) next.add(cur.right)
    }
    for(let e of next) {
      if(next.has(e.right)) {
        target = e
        for(let el of row) {
          if(el.left && el.left === target) {
            el.left = null
            return root
          }
          if(el.right && el.right === target) {
            el.right = null
            return root
          }
        }
      }
    }
    q = Array.from(next)
  }
  return root
};
