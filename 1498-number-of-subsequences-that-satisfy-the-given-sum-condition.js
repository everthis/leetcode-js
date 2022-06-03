/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = function(nums, target) {
  const n = nums.length, pow = Array(n), mod = 1e9 + 7
  pow[0] = 1
  for(let i = 1; i < n; i++) {
    pow[i] = (pow[i - 1] * 2) % mod
  }
  nums.sort((a, b) => a - b)
  let l = 0, r = n - 1, res = 0
  while(l <= r) {
    if(nums[l] + nums[r] > target) r--
    else {
      res = (res + pow[r - l]) % mod
      l++
    }
  }
  
  return res
};
