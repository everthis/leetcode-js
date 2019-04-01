/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  let n = nums.length
  if (n === 0) {
    return nums
  }
  let result = []

  let dq = []
  for (let i = 0; i < n; i++) {
    if (dq.length && dq[0] < i - k + 1) {
      dq.shift()
    }
    while (dq.length && nums[i] >= nums[dq[dq.length - 1]]) {
      dq.pop()
    }
    dq.push(i)
    if (i - k + 1 >= 0) {
      result[i - k + 1] = nums[dq[0]]
    }
  }
  return result
}
