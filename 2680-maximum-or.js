/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumOr = function(nums, k) {
  let base = 0n, backup = 0n, best = 0n;
  k = BigInt(k)
  for (let num of nums) {
    num = BigInt(num)
    backup |= base & num;
    base |= num;
  }
  for (let num of nums) {
    num = BigInt(num)
    best = max(best, base - num | backup | num << k);
  }
  return Number(best);    
};

function max(a, b) {
  return a > b ? a : b
}
