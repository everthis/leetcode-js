/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
const minimizeTheDifference = function(mat, target) {
  const m = mat.length, n = mat[0].length
  const dp = Array.from({length: m}, () => Array(70*70).fill(-1))
  return fn(0, 0)
  
  function fn(row, sum) {
    if(row === m) return Math.abs(target - sum)
    if(dp[row][sum] !== -1) return dp[row][sum]
    let res = Number.MAX_SAFE_INTEGER
    for(let j = 0; j < n; j++) {
      res = Math.min(res, fn(row + 1, sum + mat[row][j]))
    }
    return dp[row][sum] = res
  }
};

