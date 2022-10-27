/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
const minCost = function (nums, cost) {
  const n = nums.length
  let l = Math.min(...nums)
  let r = Math.max(...nums)

  while(l < r) {
    const mid = Math.floor((l + r) / 2)
    const v1 = calc(mid)
    const v2 = calc(mid + 1)
    if(v1 < v2) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return calc(l)

  function calc(v) {
    let res = 0
    for (let i = 0; i < n; i++) {
      res += Math.abs(nums[i] - v) * cost[i]
    }
    return res
  }
}
