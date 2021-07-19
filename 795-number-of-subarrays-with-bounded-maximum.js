/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const numSubarrayBoundedMax = function(A, L, R) {
    let res = 0;
    let j = 0;
    let count = 0;
    for(let i = 0; i < A.length; i++) {
        if(A[i] >= L && A[i] <= R) {
            res += i - j + 1
            count = i - j + 1
        } else if(A[i] < L) {
            res += count
        } else {
            j = i + 1
            count = 0
        }
    }
    return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const numSubarrayBoundedMax = function(nums, left, right) {
  let prev = -1, dp = 0, res = 0
  for(let i = 0, n = nums.length; i < n; i++) {
    const cur = nums[i]
    if(cur < left) res += dp
    else if(cur > right) {
      dp = 0
      prev = i
    } else {
      dp = i - prev
      res += dp
    }
  }
  return res
};
