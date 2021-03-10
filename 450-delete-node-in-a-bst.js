/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function(root, key) {
  if(root == null) return null
  if(key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if(key > root.val) {
    root.right = deleteNode(root.right, key)
  } else {
    if(root.left == null) {
      return root.right
    } else if(root.right == null) {
      return root.left
    } else {
      let smallestRight = root.right
      while(smallestRight.left !== null) smallestRight = smallestRight.left
      smallestRight.left = root.left
      return root.right
    }
  }
  
  return root
};
