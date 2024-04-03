/**
 * @param {number} n
 * @return {number}
 */
const stringCount = function(n) {
  const LEET = parseInt('1111', 2),
        L = parseInt('1000', 2),
        FE = parseInt('0100', 2),
        SE = parseInt('0010', 2),
        T = parseInt('0001', 2),
        MOD = 1e9 + 7
  const dp = Array.from({ length: n }, () => Array(16).fill(-1))
  return helper(0, 0)
  
  function helper(i, mask) {
    if(i === n) {
      return mask === LEET ? 1 : 0
    }
    if(dp[i][mask] !== -1) return dp[i][mask]
    
    let res = (helper(i + 1, mask | L) + helper(i + 1, mask | T)) % MOD
    if(mask & FE) {
      res = (res + helper(i + 1, mask | SE)) % MOD
    } else {
      res = (res + helper(i + 1, mask | FE)) % MOD
    }
    res = (res + 23 * helper(i + 1, mask)) % MOD
    dp[i][mask] = res
    return dp[i][mask]
  }
};
