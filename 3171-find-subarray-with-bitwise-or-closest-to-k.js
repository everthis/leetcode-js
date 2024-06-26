
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  const bits = new Array(32).fill(0);
  let res = Number.MAX_SAFE_INTEGER, n = nums.length;
  let left = 0, right = 0;
  while (right < n) {
      let curr = update(nums[right], 1);
      res = Math.min(res, Math.abs(curr - k));
      while (left < right && curr > k) {
          curr = update(nums[left++], -1);
          res = Math.min(res, Math.abs(curr - k));
      }
      right++;
  }
  return res;
  function update(num, val) {
      let res = 0;
      for (let i = 0; i < 32; i++) {
          if ((num >> i) & 1) {
              bits[i] += val;
          }
          if (bits[i]) res |= 1 << i;
      }
      return res;
    }
};


