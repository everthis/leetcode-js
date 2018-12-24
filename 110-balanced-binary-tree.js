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
const isBalanced = function(root) {
    return check(root) >= 0 ? true : false
};

const check = (root) => {
    if(!root) return 1
    
    const left = check(root.left)
    if( left === -1 ) return -1
    
    const right = check(root.right)
    if( right === -1 ) return -1
    
    if(Math.abs(left - right) > 1)return -1
    
    return (1 + Math.max(left, right))
}
