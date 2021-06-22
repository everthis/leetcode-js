/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  let i = 0;
  while (true) {
    if (nums[i] == nums[i + 1]) {
      i += 2;
    } else {
      return nums[i];
    }
  }
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  const n = nums.length
  let left = 0, right = n - 1
  while(left < right) {
    const mid = left + ((right - left) >> 1)
    if(nums[mid] === nums[mid ^ 1]) left = mid + 1
    else right = mid
  }
  
  return nums[left]
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  const n = nums.length
  let left = 0, right = n - 1
  while(left < right) {
    const mid = ~~((left + right) / 2)
    if((mid % 2 === 0 && nums[mid] === nums[mid + 1]) || (mid % 2 === 1 && nums[mid] === nums[mid - 1])) left = mid + 1
    else right = mid
  }
  
  return nums[left]
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  if(nums.length === 0) return 0
  let res = nums[0]
  for(let i = 1, len = nums.length; i < len; i++) {
    res ^= nums[i]
  }
  return res
};
