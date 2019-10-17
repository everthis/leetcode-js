/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
};

// another

const rotate = function(nums, k) {
  let i = k
  while (i > 0) {
    nums.unshift(nums.pop())
    i--
  }
};

// another

const rotate = function(nums, k) {
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}

function reverse(nums, start, end) {
  while (start < end) {
    var temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
