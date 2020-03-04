/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = function(nums) {
  let [stack, s3] = [[], -Infinity]
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < s3) {
      return true
    }
    while (stack[stack.length - 1] < nums[i]) {
      s3 = stack.pop()
    }
    stack.push(nums[i])
  }
  return false
}
