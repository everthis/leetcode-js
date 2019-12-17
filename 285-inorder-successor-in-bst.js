/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderSuccessor = function(root, p) {
  const res = { node: null }
  dfs(root, [], res, p)
  return res.node
};

function dfs(node, arr, res, target) {
  if(node === null) return
  dfs(node.left, arr, res, target)
  if(arr.length && arr[arr.length - 1] === target) res.node = node
  arr.push(node)
  dfs(node.right, arr, res, target)
} 

// another

const inorderSuccessor = function(root, p) {
  let last = null
  const chk = node => {
    if(!node) return
    const l = chk(node.left)
    if(l !== undefined) return l
    if(last === p) return node
    last = node
    return chk(node.right)
  }
  return chk(root)
};

// another

const inorderSuccessor = function(root, p) {
  while (root != null && root.val <= p.val) root = root.right
  const left = root == null ? null : inorderSuccessor(root.left, p)
  return left != null && left.val > p.val ? left : root
}

// another

const inorderSuccessor = function(root, p) {
  let succ = null
  while(root) {
    if (p.val < root.val) {
      succ = root
      root = root.left
    } else {
      root = root.right
    }
  }
  return succ
}
