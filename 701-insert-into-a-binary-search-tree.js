/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function(root, val) {
    if(root == null) return new TreeNode(val);
    let cur = root;
    while(true) {
      if(cur.val <= val) {
        if(cur.right != null) cur = cur.right;
        else {
          cur.right = new TreeNode(val);
          break;
        }
      } else {
        if(cur.left != null) cur = cur.left;
        else {
          cur.left = new TreeNode(val);
          break;
        }
      }
    }
    return root;
}; 

// another

const insertIntoBST = function(root, val) {
    if (root == null) {
      return new TreeNode(val);
    }
    if (root.val > val) {
      root.left = insertIntoBST(root.left, val);
    } else {
      root.right = insertIntoBST(root.right, val);
    }
    return root;
}; 
