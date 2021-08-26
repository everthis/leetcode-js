/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function(nums) {
  const hash = {}
  for(let e of nums) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  nums.sort((a, b) => hash[a] === hash[b] ? b - a : hash[a] - hash[b])
  return nums
};
