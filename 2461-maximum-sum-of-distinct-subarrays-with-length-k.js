/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function(nums, k) {
  let res = 0, i = 0, sum = 0
  const map = new Map(), n = nums.length
  for(let j = 0; j < k; j++) {
    const e = nums[j]
    if(map.get(e) == null) map.set(e, 0)
    map.set(e, (map.get(e) || 0) + 1)
    sum += e
  }
  if(map.size === k) res = sum
  for(let j = k; j < n; j++) {
    const e = nums[j]
    if(map.get(e) == null) map.set(e, 0)
    map.set(e, (map.get(e) || 0) + 1)
    sum += e

    // pre
    const tmp = nums[i]
    map.set(tmp, map.get(tmp) - 1)
    if(map.get(tmp) === 0) map.delete(tmp)
    sum -= tmp
    i++

    if(map.size === k) res = Math.max(res, sum)
  }

  return res
};

// another


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function (nums, k) {
  const map = new Map(), n = nums.length
  let i = 0, res = 0, sum = 0

  while(i < n && i < k) {
    const cur = nums[i]
    map.set(cur, (map.get(cur) || 0) + 1 )
    sum += cur
    i++
  }
  if(map.size === k) res = sum

  for(i = k; i < n; i++) {
    const cur = nums[i]
    map.set(cur, (map.get(cur) || 0) + 1)
    const pre = nums[i - k]
    map.set(pre, (map.get(pre) || 0) - 1)
    if(map.get(pre) === 0) map.delete(pre)

    sum += cur
    sum -= nums[i - k]

    if(map.size === k) res = Math.max(res, sum)
  }

  return res
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function(nums, k) {
  let res = 0
  const n = nums.length
  
  const preSum = Array(n).fill(0)
  preSum[0] = nums[0]
  for(let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + nums[i]
  }
  
  const set = new Set()
  
  const lastHash = {}
  
  for(let i = 0; i < n; i++) {
    const cur = nums[i]
    lastHash[cur] = i
    if(i < k - 1) set.add(cur)
    else if(i === k - 1) {
      set.add(cur)
      if(set.size === k) {
        res = preSum[i]
      }
    } else {
      if(lastHash[nums[i - k]] == i - k) set.delete(nums[i - k])
      set.add(nums[i])
      if(set.size === k) {
        res = Math.max(res, preSum[i] - preSum[i - k])
      }
    }
  }
  
  return res
};
