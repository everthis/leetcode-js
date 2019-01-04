/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
    if (root == null) {
        return false
    }
    const obj = {
        sum: 0
    }
    const res = []
    dfs(root, obj, sum, res)
    return res.indexOf(true) !== -1
};

function dfs(node, obj, target, res) {

    if (node.left == null && node.right == null) {
        obj.sum += node.val
        if (obj.sum === target) {
            res.push(true)
        }
    }
    if (node.left) {
        dfs(node.left, {sum: obj.sum + node.val}, target, res)
    }
    if (node.right) {
        dfs(node.right, {sum: obj.sum + node.val}, target, res)
    }
}
