/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCost = function (nums, k) {
  const n = nums.length
  const dp = Array(n + 1).fill(Infinity)
  for(let i = 0; i < n; i++) {
    let score = 0, hash = {}
    for(let j = i; j >= 0; j--) {
      const e = nums[j]
      if(hash[e] == null) hash[e] = 0
      hash[e]++
      if(hash[e] === 2) score += 2
      else if(hash[e] > 2) score++
      
      if(j > 0) dp[i] = Math.min(dp[i], dp[j - 1] + score + k)
      else dp[i] = Math.min(dp[i], score + k)
    }
  }
  
  return dp[n - 1]
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCost = function (nums, k) {
  const n = nums.length,
    max = Math.max(...nums),
    dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
    let f = Array(max + 1).fill(0),
      cost = 0
    for (let j = i; j < n; j++) {
      f[nums[j]]++
      if (f[nums[j]] == 2) {
        cost += 2
      } else if (f[nums[j]] > 2) {
        cost++
      }
      dp[j + 1] = Math.min(dp[i] + cost + k, dp[j + 1])
    }
  }
  return dp[n]
}
