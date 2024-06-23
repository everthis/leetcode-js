/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTotalCost = function (nums) {
  const n = nums.length
  const cache = new Map()

  return dfs(n - 1)
  function dfs(i) {
    if (cache.has(i)) return cache.get(i)
    if (i === 0) {
      return nums[0]
    } else if (i === 1) {
      return nums[0] + Math.abs(nums[1])
    } else {
      const result = Math.max(
        dfs(i - 1) + nums[i],
        dfs(i - 2) + nums[i - 1] - nums[i],
      )
      cache.set(i, result)
      return result
    }
  }
}
