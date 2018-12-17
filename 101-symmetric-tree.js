/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
    if(root == null) return true
    return compare(root.left, root.right)
};

function compare(l, r) {
    if(l == null && r == null) return true
    if( (l == null && r != null) || (l != null && r == null) ) return false
    
    if(l.val === r.val) {
        if(compare(l.left, r.right) !== false && compare(l.right, r.left) !== false) {
           return true
         } else {
             return false
         }
        
    } else {
        return false
    }
}
