/**
 * @param {number[]} nums
 * @return {number}
 */
const minLengthAfterRemovals = function(nums) {
  const map = new Map(), n = nums.length
  for(const e of nums) {
    if(!map.has(e)) map.set(e, 0)
    map.set(e, map.get(e) + 1)
  }
  let maxFreq = 0
  for(const [k, v] of map) {
    maxFreq = Math.max(maxFreq, v)
  }
  if(maxFreq <= n / 2) {
    return n % 2
  }
  
  return 2 * maxFreq - n
};
