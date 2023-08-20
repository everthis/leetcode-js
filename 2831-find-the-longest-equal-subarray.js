/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestEqualSubarray = function(nums, k) {
  let maxf = 0, i = 0, n = nums.length;
  let count = {};
  for (let j = 0; j < n; j++) {
      if(count[nums[j]] == null) count[nums[j]] = 0
      maxf = Math.max(maxf, ++count[nums[j]]);
      if (j - i + 1 - maxf > k) {
          if(count[nums[i]] == null) count[nums[i]] = 0
          --count[nums[i++]];
      }
        
  }
  return maxf;
};
