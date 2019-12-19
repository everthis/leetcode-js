/**

Given an array of n integers nums and a target,
find the number of index triplets i, j, k with 0 <= i < j < k < n
that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Example:

Input: nums = [-2,0,1,3], and target = 2
Output: 2 
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]

Follow up: Could you solve it in O(n2) runtime?

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumSmaller = function(nums, target) {
  nums.sort((a, b) => a - b)
  let res = 0
  for(let i = 0, len = nums.length; i < len - 2; i++) {
    let lo = i + 1
    let hi = len - 1
    while(lo < hi) {
      if(nums[i] + nums[lo] + nums[hi] < target) {
        res += hi - lo
        lo++
      } else hi--
    }
  }
  return res
};
