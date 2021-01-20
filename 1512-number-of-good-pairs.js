/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  let res = 0, count = Array(101).fill(0)
  for(let e of nums) {
    res += count[e]++
  }
  return res
};
