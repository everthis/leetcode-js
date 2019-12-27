/**

Given an array consisting of n integers,
find the contiguous subarray whose length is greater than or
equal to k that has the maximum average value.
And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation:
when length is 5, maximum average value is 10.8,
when length is 6, maximum average value is 9.16667.
Thus return 12.75.
Note:
1 <= k <= n <= 10,000.
Elements of the given array will be in range [-10,000, 10,000].
The answer with the calculation error less than 10-5 will be accepted.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
  let left = nums[0]
  let right = nums[0]
  nums.forEach(num => {
    left = Math.min(left, num)
    right = Math.max(right, num)
  })
  const check = average => {
    let rightSum = 0
    let leftSum = 0
    let minLeftSum = 0
    for (let i = 0; i < k; i++) {
      rightSum += nums[i] - average
    }
    for (let i = k; i <= nums.length; i++) {
      if (rightSum - minLeftSum >= 0) {
        return true
      }
      if (i < nums.length) {
        rightSum += nums[i] - average
        leftSum += nums[i - k] - average
        minLeftSum = Math.min(leftSum, minLeftSum)
      }
    }
    return false
  }
  while (left + 1e-5 < right) {
    let mid = (left + right) / 2
    if (check(mid)) {
      left = mid
    } else {
      right = mid
    }
  }
  return left
}
