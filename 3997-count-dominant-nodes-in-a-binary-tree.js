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
 * @return {number}
 */
var countDominantNodes = function(root) {
    const cnt = {count: 0}
    dfs(root, cnt)
    return cnt.count


    function dfs(root, cnt) {
        if(root == null) return 0
        const l = dfs(root.left, cnt)
        const r = dfs(root.right, cnt)

        const res = Math.max(root.val, l, r)
        if(root.val === res) cnt.count++
        return res
    }
};
