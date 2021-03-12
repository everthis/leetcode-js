/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  let low = 0;
  let high = nums.length-1;

  while(low < high) {
    let mid1 = low + ((high - low) >> 1);
    let mid2 = mid1 + 1;
    if(nums[mid1] < nums[mid2]) low = mid2;
    else high = mid1;
  }
  return low;
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  if(nums == null) return -1
  const len = nums.length
  if(len === 1) return 0
  for(let i = 1; i < len; i++) {
    if(i === 1 && nums[i] < nums[i - 1]) return 0
    else if(i === len - 1 && nums[i] > nums[i - 1]) return len - 1
    else if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i
  }
  return -1
};
