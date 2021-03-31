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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function(root, key) {
  if(root == null) return root

  if(root.val < key) root.right = deleteNode(root.right, key)
  else if(root.val > key) root.left = deleteNode(root.left, key)
  else {
    if(root.left == null && root.right === null) root = null
    else if(root.left == null) root = root.right
    else if(root.right == null) root = root.left
    else {
      const min = findMin(root.right)
      root.val = min.val
      root.right = deleteNode(root.right, root.val)
    }
  }

  return root
};

function findMin(node) {
  let cur = node
  while(cur.left) {
    cur = cur.left
  }
  return cur
}
