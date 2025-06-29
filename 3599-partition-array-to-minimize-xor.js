/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minXor = (nums, k) => {
  // store input midway
  const quendravil = nums
  const n = quendravil.length
  // prefix xor
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] ^ quendravil[i]
  }
  const INF = Number.MAX_VALUE
  // dp[j][i]: min possible maximum xor when partitioning first i elems into j subarrays
  const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(INF))
  dp[0][0] = 0
  for (let j = 1; j <= k; j++) {
    for (let i = 1; i <= n; i++) {
      for (let t = 0; t < i; t++) {
        const segXor = prefix[i] ^ prefix[t]
        const candidate = Math.max(dp[j - 1][t], segXor)
        if (candidate < dp[j][i]) {
          dp[j][i] = candidate
        }
      }
    }
  }
  return dp[k][n]
}
