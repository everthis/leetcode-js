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
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if(root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        if (root.left == null) {
            return root.right
        }
        if (root.right == null) {
            return root.left
        }
        let rightSmallest = root.right
        while(rightSmallest.left != null) rightSmallest = rightSmallest.left
        rightSmallest.left = root.left
        return root.right
    }
    return root
};
