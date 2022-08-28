/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  const n = nums, m = queries.length
  const arr = Array(n).fill(0)
  nums.sort((a, b) => a - b)
  
  const res = []
  for(const e of queries) {
    let sum = 0, i = 0
    while(sum <= e) {
      sum += nums[i]
      i++
    }
    res.push(i===0? 0 :i - 1)
  }
  
  return res
};
