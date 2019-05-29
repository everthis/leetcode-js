/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
const allPossibleFBT = function(N) {
  if (N <= 0) return []
  const dp = Array.from({ length: N + 1 }, () => [])
  dp[1].push(new TreeNode(0))

  for (let numNode = 1; numNode <= N; numNode += 2) {
    for (let leftNode = 1; leftNode < numNode; leftNode += 2) {
      for (let left of dp[leftNode]) {
        for (let right of dp[numNode - 1 - leftNode]) {
          let root = new TreeNode(0)
          root.left = left
          root.right = right
          dp[numNode].push(root)
        }
      }
    }
  }
  return dp[N]
};
