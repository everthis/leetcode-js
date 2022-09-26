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
const buildTree = function(preorder, inorder) {
  if(preorder.length === 0 && inorder.length === 0) return null
  const val = preorder[0]
  const node = new TreeNode(val)
  const inIdx = inorder.indexOf(val)
  const leftIn = inorder.slice(0, inIdx)
  const rightIn = inorder.slice(inIdx + 1)
  
  const leftPre = preorder.slice(1, leftIn.length + 1)
  const rightPre = preorder.slice(leftIn.length + 1)
  
  // console.log(leftIn, rightIn, leftPre, rightPre)
  node.left = buildTree(leftPre, leftIn)
  node.right = buildTree(rightPre, rightIn)
  return node
};


// another


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
