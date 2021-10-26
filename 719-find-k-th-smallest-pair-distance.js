/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function smallestDistancePair(nums, k) {
  nums.sort((a, b) => a - b)
  let l = 0, n = nums.length, r = nums[n - 1] - nums[0]
  
  let res = 0
  while(l < r) {
    let cnt = 0, mid = l + ((r - l) >> 1)
    for(let i = 0, j = 0; i < n; i++) {
      while(j < n && nums[j] <= nums[i] + mid) j++
      cnt += j - 1 - i
    }
    if(cnt < k) l = mid + 1
    else r = mid
  }

  return l
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b)
  let lo = 0
  let hi = nums[nums.length - 1] - nums[0]
  while (lo < hi) {
    let mi = Math.floor((lo + hi) / 2)
    let count = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > mi) left++
      count += right - left
    }
    //count = number of pairs with distance <= mi
    if (count >= k) hi = mi
    else lo = mi + 1
  }
  return lo
}
