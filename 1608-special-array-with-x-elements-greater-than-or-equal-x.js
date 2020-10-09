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
  return left < nums.length && left === nums[left] ? -1 : left
};
