/**

Given a sorted array A of unique numbers, find the K-th missing number
starting from the leftmost number of the array.

Example 1:

Input: A = [4,7,9,10], K = 1
Output: 5
Explanation: 
The first missing number is 5.
Example 2:

Input: A = [4,7,9,10], K = 3
Output: 8
Explanation: 
The missing numbers are [5,6,8,...], hence the third missing number is 8.
Example 3:

Input: A = [1,2,4], K = 3
Output: 6
Explanation: 
The missing numbers are [3,5,6,7,...], hence the third missing number is 6.
 
Note:

1 <= A.length <= 50000
1 <= A[i] <= 1e7
1 <= K <= 1e8

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingElement = function(nums, k) {
  for (let i = 1, len = nums.length; i < len; i++) {
    const dif = nums[i] - nums[i - 1] - 1
    if (dif >= k) {
      return nums[i - 1] + k
    }
    k -= dif
  }
  return nums[nums.length - 1] + k
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingElement = function(nums, k) {
  const n = nums.length
  let l = 0
  let h = n - 1
  const missingNum = nums[n - 1] - nums[0] + 1 - n
  if (missingNum < k) {
    return nums[n - 1] + k - missingNum
  }
  while (l < h - 1) {
    const m = l + ((h - l) >> 1)
    const missing = nums[m] - nums[l] - (m - l)
    if (missing >= k) {
      h = m
    } else {
      k -= missing
      l = m
    }
  }
  return nums[l] + k
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingElement = function(nums, k) {
  const n = nums.length
  if (k > missing(nums, n - 1)) return nums[n - 1] + k - missing(nums, n - 1)
  let left = 0,
    right = n - 1,
    pivot
  while (left < right) {
    pivot = left + Math.floor((right - left) / 2)
    if (missing(nums, pivot) < k) left = pivot + 1
    else right = pivot
  }
  return nums[left - 1] + k - missing(nums, left - 1)
}
function missing(arr, idx) {
  return arr[idx] - arr[0] - idx
}

