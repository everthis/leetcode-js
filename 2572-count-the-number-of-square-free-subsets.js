/**
 * @param {number[]} nums
 * @return {number}
 */
const squareFreeSubsets = function(nums) {
  const primes = [2,3,5,7,11,13,17,19,23,29]
  const n = nums.length
  const limit = 1 << primes.length, mod = 1e9 + 7
  const dp = Array.from({ length: n + 1 }, () => Array(limit).fill(0))
  dp[0][0] = 1
  const arr = [0, ...nums]
  let res = 0
  for(let i = 1; i <= n; i++) {
    const cur = arr[i]
    for(let mask = 0; mask < limit; mask++) {
      if(cur === 1) {
        dp[i][mask] = (dp[i - 1][mask] * 2) % mod
      } else {
        dp[i][mask] = dp[i - 1][mask]
        const sub = helper(cur)
        if(sub !== -1 && (mask & sub) === sub) {
          dp[i][mask] = (dp[i][mask] + dp[i - 1][mask - sub]) % mod
        }
      }
      if(i === n) {
        res = (res + dp[i][mask]) % mod
      }
    }
  }
  
  return (res + mod - 1) % mod
  
  function helper(x) {
    let res = 0
    for(let i = 0; i < primes.length; i++) {
      let cnt = 0
      while(x && (x % primes[i] === 0)) {
        cnt++
        x = x / primes[i]
      }
      if(cnt > 1) return -1
      else if(cnt === 1) {
        res = res | (1 << i)
      }
    }
    return res
  }
};
