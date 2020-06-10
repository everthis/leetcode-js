/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    } else {
      if (i === nums.length - 1) {
        return i + 1;
      }
    }
  }
};

// another

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  const n = nums.length
  let l = 0, r = n - 1
  while(l <= r) {
    const mid = l + ((r - l) >> 1)
    if(nums[mid] === target) return mid
    if(nums[mid] > target) r = mid - 1
    else l = mid + 1
  }
  return l
};
