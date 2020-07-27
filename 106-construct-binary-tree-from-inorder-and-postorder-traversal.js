/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

const buildTree = function(inorder, postorder) {
  const inmap = {};
  const posts = postorder;
  for (let i = 0; i < inorder.length; i++) {
    inmap[inorder[i]] = i;
  }
  return helper(postorder.length - 1, 0, inorder.length - 1);

  function helper(postEnd, inStart, inEnd) {
    if (postEnd < 0 || inEnd < inStart) return null;
    const val = posts[postEnd];
    const idx = inmap["" + val];
    const root = new TreeNode(val);
    root.left = helper(postEnd - (inEnd - idx) - 1, inStart, idx - 1);
    root.right = helper(postEnd - 1, idx + 1, inEnd);

    return root;
  }
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

const buildTree = function (inorder, postorder) {
  let pInorder = inorder.length - 1
  let pPostorder = postorder.length - 1
  return helper(inorder, postorder, null)
  function helper(inorder, postorder, end) {
    if (pPostorder < 0) return null
    // create root node
    const n = new TreeNode(postorder[pPostorder--])
    // if right node exist, create right subtree
    if (inorder[pInorder] != n.val) {
      n.right = helper(inorder, postorder, n)
    }
    pInorder--
    // if left node exist, create left subtree
    if (end === null || inorder[pInorder] !== end.val) {
      n.left = helper(inorder, postorder, end)
    }
    return n
  }
}
