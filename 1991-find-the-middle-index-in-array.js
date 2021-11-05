/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function(nums) {
  const n = nums.length, leftSum = Array(n + 1).fill(0)
  const sum = nums.reduce((ac, e) => ac + e, 0) 
  for(let i = 0; i < n; i++) {
    leftSum[i+1] = leftSum[i] + nums[i]
  }

  let res
  for(let i = 0; i < n; i++) {
    if(leftSum[i] === sum - leftSum[i] - nums[i]) {
      res = i
      break
    }
  }

  return res == null ? -1 : res
};
