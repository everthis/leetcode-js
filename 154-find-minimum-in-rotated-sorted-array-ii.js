/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  for(let i = 1, len = nums.length; i < len; i++) {
    if(nums[i] < nums[i - 1]) {
      return nums[i]
    }
  }
  return nums[0]
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  let lo = 0,
    hi = nums.length - 1
  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2)
    if (nums[mid] > nums[hi]) lo = mid + 1
    else if (nums[mid] < nums[hi]) hi = mid
    else hi--
  }
  return nums[lo]
}
