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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y, depth = 1, P = {}, D = {}) => {
  let q = [root]
  while (q.length) {
    let K = q.length
    while (K--) {
      let p = q.shift()
      if (p.left) {
        if (p.left.val === x) (P.x = p.val), (D.x = depth)
        if (p.left.val === y) (P.y = p.val), (D.y = depth)
        q.push(p.left)
      }
      if (p.right) {
        if (p.right.val === x) (P.x = p.val), (D.x = depth)
        if (p.right.val === y) (P.y = p.val), (D.y = depth)
        q.push(p.right)
      }
    }
    ++depth
  }
  return P.x !== P.y && D.x === D.y
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function(root, x, y) {
    if(root == null) return false
    const res = []
    chk(root, x, [], res)
    chk(root, y, [], res)
    if(res.length < 2) return false
    return chkRes(res, x, y)
};
function chkRes(arr, x, y) {
  let ci = 0, xi = -1, yi = -1
  let len = Math.max(arr[0].length, arr[1].length)
  for(let i = 0; i < len; i++) {
    if(arr[0][i] === arr[1][i]) ci = i
    if(arr[0][i] === x || arr[1][i] === x) xi = i
    if(arr[0][i] === y || arr[1][i] === y) yi = i
  }
  if(xi - yi === 0 && xi - ci > 1) {
     return true
  } else {
    return false
  }
}

function chk(node, val, path, res) {
  if(node == null) return
  path.push(node.val)
  if(node.val === val) {
    res.push(path.slice(0))
    return
  }
  chk(node.left, val, path.slice(0), res)
  chk(node.right, val, path.slice(0), res)
}
