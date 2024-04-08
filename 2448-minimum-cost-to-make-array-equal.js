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

// another

/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
const minCost = function(nums, cost) {
  const n = nums.length
  const {min, max, abs, floor} = Math
  let l = Infinity, r = -Infinity
  
  for(const e of nums) {
    l = min(e, l)
    r = max(e, r)
  }
  let res = calcCost(l)
  while(l < r) {
    const mid = floor((l + r) / 2)
    const v1 = calcCost(mid)
    const v2 = calcCost(mid + 1)
    res = min(res, v1, v2)
    if(v1 < v2) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  
  return res
  
   
  function calcCost(x) {
    let res = 0
    for(let i = 0; i < n; i++) {
      res += abs(nums[i] - x) * cost[i]
    }
    return res
  }
};
