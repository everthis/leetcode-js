/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfPower = function(nums) {
  const n = nums.length, mod = BigInt(1e9 + 7)
  let res = 0n, sum = 0n
  nums.sort((a, b) => a - b)
  
  for(let i = 0; i < n; i++) {
    const e = BigInt(nums[i])
    const square = (e * e) % mod
    
    res = (res + sum * square + e * square) % mod
    sum = (sum * 2n + e) % mod  
  }
  
  return res
};
