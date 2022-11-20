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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function(root, queries) {
    const arr = []
    function dfs(node) {
      if(node == null) return
      dfs(node.left)
      arr.push(node.val)
      dfs(node.right)
    }
    dfs(root)
    const res = []
    // console.log(arr)
    for(const q of queries) {
      const tmp = []
      tmp[0] = ceil(arr, q)
      tmp[1] = floor(arr, q)
      res.push(tmp)
    }
    
    return res
    // maxIdx that <= target  
    function ceil(arr, q) {
      const n = arr.length
      let l = 0, r = n - 1
      while(l < r) {
        const mid = r - (~~((r - l) / 2))
        if(arr[mid] <= q) {
          l = mid
        } else {
          r = mid - 1
        }
      }
      
      return arr[l] <= q ? arr[l] : -1
    }
    // minIdx that >= target
    function floor(arr, q) {
      const n = arr.length
      let l = 0, r = n - 1
      while(l < r) {
        const mid = ~~((r + l) / 2)
        if(arr[mid] < q) {
          l = mid + 1
        } else {
          r = mid
        }
      }
      
      return arr[l] >= q ? arr[l] : -1
    }
};
