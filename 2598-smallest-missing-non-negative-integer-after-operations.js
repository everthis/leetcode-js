/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
const findSmallestInteger = function(nums, value) {
  const hash = {}, n = nums.length
  for(const e of nums) {
    let remain = e % value
    if(remain < 0)  remain = value + remain
    if(hash[remain] == null) hash[remain] = 0
    hash[remain]++
  }
  for(let i = 0; i < n; i++) {
    const re = i % value
    if(hash[re] == null) return i
    hash[re]--
    if(hash[re] === 0) delete hash[re]
  }
  return n
};
