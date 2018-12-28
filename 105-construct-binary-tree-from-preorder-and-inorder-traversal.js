/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let pre
let ins
let inmap = {}
const buildTree = function(preorder, inorder) {
    pre = preorder
    ins = inorder
    for(let i = 0; i < inorder.length; i++) {
      inmap[inorder[i]] = i
    }
    let root = helper(0,0,ins.length - 1)
    return root
};

function helper(preStart, inStart, inEnd) {
  if (preStart > pre.length -1 || inStart > inEnd) {
    return null
  }
  let val = pre[preStart]
  let root = new TreeNode(val)
  let inIndex = inmap[val]
  root.left = helper(preStart + 1, inStart, inIndex - 1)
  root.right = helper(preStart+inIndex-inStart+1, inIndex+1, inEnd)
  return root
}
