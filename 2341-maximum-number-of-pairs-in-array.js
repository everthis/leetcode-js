/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const n = nums.length
  let res = 0
  const hash = {}
  for(const e of nums) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
    if(hash[e] === 2) {
      res++
      hash[e] = 0
    }
  }
  
  return [res, n - res * 2]
};
