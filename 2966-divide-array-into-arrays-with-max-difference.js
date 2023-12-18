/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
const divideArray = function(nums, k) {
  nums.sort((a, b) => a - b)
  const res = [], n = nums.length
  for(let i = 2; i < n; i += 3) {
    if(nums[i] - nums[i - 2] > k) {
      return res
    }
  }
  for(let i = 0; i < n;) {
    const tmp = []
    let num = 3
    while(num) {
      tmp.push(nums[i])
      i++
      num--
    }
    res.push(tmp)
  }
  return res
};
