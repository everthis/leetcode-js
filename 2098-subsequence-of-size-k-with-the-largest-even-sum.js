/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestEvenSum = function(nums, k) {
  nums.sort((a, b) => b - a)
  let sum = 0
  for(let i = 0; i < k; i++) sum += nums[i]
  if(sum % 2 === 0) return sum
  
  const INF = 10 ** 6
  let minOdd = INF, minEven = INF
  for(let i = 0; i < k; i++) {
    if(nums[i] % 2 === 0) minEven = Math.min(minEven, nums[i])
    else minOdd = Math.min(minOdd, nums[i])
  }
  
  const n = nums.length
  let res = -1
  for(let i = k; i < n; i++) {
    if(nums[i] % 2 === 0 && minOdd !== INF) {
      res = Math.max(res, sum - minOdd + nums[i])
    }
    if(nums[i] % 2 === 1 && minEven !== INF) {
      res = Math.max(res, sum - minEven + nums[i])
    }
  }
  
  return res
};
