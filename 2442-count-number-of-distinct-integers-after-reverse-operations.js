/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
  const set = new Set()
  
  for(const e of nums) set.add(e)
  for(const e of nums) set.add(reverse(e))
  return set.size
  
  function reverse(num) {
    return parseInt(('' + num).split('').reverse().join(''))
  }
};
