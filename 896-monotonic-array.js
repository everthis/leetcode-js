/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function(nums) {
  return inc(nums) || dec(nums)
};

function inc(nums) {
  if(nums == null || nums.length <= 1) return true
  for(let i = 1, n = nums.length; i < n; i++) {
    if(nums[i] < nums[i - 1]) return false
  }
  return true 
}
function dec(nums) {
  if(nums == null || nums.length <= 1) return true
  for(let i = 1, n = nums.length; i < n; i++) {
    if(nums[i] > nums[i - 1]) return false
  }
  return true 
}

// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function(nums) {
  let inc = true, dec =  true
  for(let i = 1, n = nums.length; i < n; i++) {
    inc &= nums[i] >= nums[i - 1]
    dec &= nums[i] <= nums[i - 1]
  }
  return inc ||  dec
};
