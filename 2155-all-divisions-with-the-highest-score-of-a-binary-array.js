/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
  const n = nums.length
  // if(n === 1) return [0]
  const leftZero = Array(n).fill(0), rightOne = Array(n).fill(0)
  for (let i = 0, sum = 0; i < n; i++) {
    if(nums[i] === 0) sum++
    leftZero[i] = sum
  }
  for (let i = n - 1, sum = 0; i >= 0; i--) {
    if(nums[i] === 1) sum++
    rightOne[i] = sum
  }
  let hash = {}
  for (let i = 0, sum = 0; i <= n; i++) {
    
    hash[i] = (i === 0 ? 0 : leftZero[i - 1]) + (i === n ? 0 : rightOne[i])
  }
  const max = Math.max(...Object.values(hash))
  const res = []
  Object.keys(hash).forEach(k => {
    if(hash[k] === max) res.push(+k)
  })
  return res
};
