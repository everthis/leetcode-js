/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minSpaceWastedKResizing = function(nums, k) {
  const n = nums.length, INF = 200 * 1e6
  const memo = Array.from({length: n}, () => Array(k))
  return dp(0, k)
  
  function dp(i, k) {
    if(i === n) return 0
    if(k < 0) return INF
    if(memo[i][k] != null) return memo[i][k]
    let res = INF, max = nums[i], sum = 0
    for(let j = i; j < n; j++) {
      max = Math.max(max, nums[j])
      sum += nums[j]
      const waste = max * (j - i + 1) - sum
      res = Math.min(res, dp(j + 1, k - 1) + waste)
    }
    return memo[i][k] = res
  }
};
