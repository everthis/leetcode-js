/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    let A = nums
    let r = A[0];

    // imax/imin stores the max/min product of
    // subarray that ends with the current number A[i]
    for (let i = 1, imax = r, imin = r, n = A.length; i < n; i++) {
        if (A[i] < 0) {
          let tmp = imax
          imax = imin
          imin = tmp
        };
        // max/min product for the current number is either the current number itself
        // or the max/min by the previous number times the current one
        imax = Math.max(A[i], imax * A[i]);
        imin = Math.min(A[i], imin * A[i]);

        // the newly computed max value is a candidate for our global result
        r = Math.max(r, imax);
    }
    return r;
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  if(nums.length == 1)return nums[0];
  let dpMax = nums[0];
  let dpMin = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let k = dpMax*nums[i];
    let m = dpMin*nums[i];
    dpMax = Math.max(nums[i], Math.max(k, m));
    dpMin = Math.min(nums[i], Math.min(k, m));
    max = Math.max(dpMax, max);
  }
  return max;
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  const n = nums.length
  let max, min
  let res = max = min = nums[0]
  for(let i = 1; i < n; i++) {
    if(nums[i] < 0) [max, min] = [min, max]
    max = Math.max(nums[i], nums[i] * max)
    min = Math.min(nums[i], nums[i] * min)
    res = Math.max(res, max)
  }
  return res
};
