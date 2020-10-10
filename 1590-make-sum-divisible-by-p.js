/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function(nums, p) {
  const diff = nums.reduce((a, b) => a + b, 0) % p;
  let res = diff === 0 ? 0 : nums.length;
  
  for (let i = 0, sum = 0, map = {0: -1}; i < nums.length; i++) {
    sum += nums[i];
    const target = (sum % p - diff + p) % p;
    if (map[target] !== undefined) {
      res = Math.min(res, i - map[target]);
    }
    map[sum % p] = i;
  }
  
  return res === nums.length ? -1 : res;
};
