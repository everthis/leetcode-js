/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSum = function(nums, k) {
  const n = nums.length, mod = BigInt(1e9 + 7)
  let res = 0n
  const stk = Array(n).fill(0), idx = Array(32).fill(0)
  for(const e of nums) {
      for(let i = 0; i < 32; i++) {
          if((e >> i) & 1) {
              stk[idx[i]] += (1 << i)
              idx[i]++
          }
      }
  }

  for(let i = 0; i < k; i++) {
      res += BigInt(stk[i]) * BigInt(stk[i]) 
      res %= mod 
  }
  
  return Number(res)
};
