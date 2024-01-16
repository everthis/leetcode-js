/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = function(nums, n) {
  let sum = 1, res = 0, i = 0
  while(sum <= n) {
    if(i < nums.length && nums[i] <= sum) {
      sum += nums[i]
      i++
    } else {
      res++
      sum *= 2
    }
  }

  return res 
};

// another

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = function(nums, n) {
  const len = nums.length
  let miss = 1, res = 0, i = 0
  while(miss <= n) {
    if(i < len && nums[i] <= miss) {
      miss += nums[i]
      i++
    } else {
      res++
      miss += miss
    }
  }
  
  return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = function(nums, n) {
  let answer = 0
  for (let i = 0, next = 1; next <= n; ) {
    if (i >= nums.length || nums[i] > next) {
      answer++
      next *= 2
    } else next += nums[i++]
  }
  return answer
}
