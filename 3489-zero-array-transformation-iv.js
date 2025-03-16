/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  if (nums.every((num) => num === 0)) return 0

  function canZero(k) {
    for (let i = 0; i < nums.length; i++) {
      const target = nums[i]
      const values = []
      for (let j = 0; j < k; j++) {
        const [l, r, v] = queries[j]
        if (i >= l && i <= r) {
          values.push(v)
        }
      }
      const dp = new Array(target + 1).fill(false)
      dp[0] = true
      for (const v of values) {
        for (let s = target; s >= v; s--) {
          if (dp[s - v]) dp[s] = true
        }
      }
      if (!dp[target]) return false
    }
    return true
  }

  for (let i = 0; i < queries.length; i++) {
    if (canZero(i + 1)) {
      return i + 1
    }
  }
  return -1
}
