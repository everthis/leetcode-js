/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfGoodSubsequences = function(nums) {
  const limit = 1e5 + 10;
  const mod = 1e9 + 7;
  const count = Array(limit).fill(0);
  const total = Array(limit).fill(0);
  let res = 0;
  for(const e of nums) {
    count[e + 1] = (count[e] + count[e + 1] + count[e + 2] + 1) % mod
    const cur = total[e] + total[e + 2] + e * (count[e] + count[e + 2] + 1)
    total[e + 1] = (total[e + 1] + cur) % mod
    res =(res + cur) % mod
  }
  return res
};
