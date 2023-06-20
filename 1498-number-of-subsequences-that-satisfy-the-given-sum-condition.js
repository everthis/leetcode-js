/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = function(nums, target) {
  const n = nums.length, mod = 1e9 + 7
  const pows = Array(n).fill(1)
  for(let i = 1; i < n; i++) {
    pows[i] = pows[i - 1] * 2 % mod
  }
  let res = 0, l = 0, r = n - 1
  nums.sort((a, b) => a - b)
  while(l <= r) {
    if(nums[l] + nums[r] > target) r--
    else {
      res = (res + pows[r - l]) % mod
      l++
    }
  }
  
  return res
};
