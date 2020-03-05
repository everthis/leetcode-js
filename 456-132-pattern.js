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

// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = function(nums) {
  let idx = nums.length
  let s3 = Number.NEGATIVE_INFINITY
  for(let len = nums.length, i = len - 1; i >= 0; i--) {
    if(nums[i] < s3) return true
    while(idx < nums.length && nums[i] > nums[idx]) {
      s3 = nums[idx++]
    }
    nums[--idx] = nums[i] 
  }
  return false
}

