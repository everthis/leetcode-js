/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
  let l = -1, r = 1001
  while(l <= r) {
    const mid = r - Math.floor((r - l) / 2)
    const tmp = valid(mid)
    if(tmp === mid) return mid
    else if(tmp > mid) l = mid + 1
    else r = mid - 1
  }
  return -1
  
  function valid(mid) {
    let res = 0
    for(let e of nums) {
      if(e >= mid) res++
    }
    return res
  }
};

// another 

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function (nums) {
    nums.sort((a, b) => b - a)
    let i = 0
    while(i < nums.length && nums[i] >= i) {
      i++
    }
    if(nums[i - 1] < i) return -1
    return i
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
  nums.sort((a, b) => b - a)
  let left = 0, right = nums.length
  while(left <= right) {
    const mid = left + ((right - left) >> 1)
    if(mid < nums[mid]) left = mid + 1
    else right = mid - 1
  }
  // if we found i == nums[i], there will be i + 1 items
  // larger or equal to i, which makes array not special.
  return left < nums.length && left === nums[left] ? -1 : left
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
  const n = nums.length
  nums.sort((a, b) => b - a)
  let l = 0, r = n
  while(l < r) {
    const mid = l + ((r - l) >> 1)
    if(nums[mid] > mid) l = mid + 1
    else r = mid
  }
  return l < n && l === nums[l] ? -1 : l
}
