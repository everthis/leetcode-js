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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    const arr = []
    traverse(root, [], arr)
    let pii
    let qii
    // in same path
    for(let i = 0; i < arr.length; i++) {
      let pi = arr[i].indexOf(p.val)
      let qi = arr[i].indexOf(q.val)
      if(pi !== -1) pii = [i, pi]
      if(qi !== -1) qii = [i, qi]
      if(pi !== -1 && qi !== -1) {
         return new TreeNode( pi <= qi ? p.val : q.val )
      }
    }

    const len = Math.min(arr[pii[0]].length, arr[qii[0]].length)
    const pp = arr[pii[0]]
    const qp = arr[qii[0]]
    for(let i = 0; i < len; i++) {
      if(pp[i] !== qp[i]) return new TreeNode(pp[i - 1])
    }
};

function traverse(node, path = [], arr) {
  if(node == null) return
  path.push(node.val)
  if(node.left === null && node.right === null) {
    arr.push(path.slice(0))
    return
  }
  traverse(node.left, path.slice(0), arr)
  traverse(node.right, path.slice(0), arr)
}

// another

const lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    return left ? left : right;
};
