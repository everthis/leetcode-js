/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function(nums) {
  let stack = []
  let left = nums.length
  let right = 0
  for(let i = 0; i < nums.length; i++) {
    while(stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      left = Math.min(left, stack.pop())
    }
    stack.push(i)
  }
  stack = []
  for(let i = nums.length - 1; i >= 0; i--) {
    while(stack.length > 0 && nums[stack[stack.length - 1]] < nums[i] ) {
      right = Math.max(right, stack.pop())
    }
    stack.push(i)
  }
  
  
  return right > left ? right - left + 1: 0
};
