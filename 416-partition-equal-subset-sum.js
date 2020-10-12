/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function(nums) {
    let sum = 0
    for(let num of nums) {
      sum += num
    }
    
    if(sum & 1 === 1) {
       return false
    }
    
    sum /= 2
    let n = nums.length
    const dp = Array.from(new Array(n+1), () => [])
    for(let i = 0; i < dp.length; i++) {
      dp[i] = new Array(sum+1).fill(false)
    }
    dp[0][0] = true
    for(let i = 1; i < n + 1; i++) {
      dp[i][0] = true
    }
    for(let j = 1; j < sum + 1; j++) {
      dp[0][j] = false
    }
    for(let i = 1; i < n + 1; i++) {
      for(let j = 1; j < sum + 1; j++) {
        if(j >= nums[i - 1]) {
          dp[i][j] = (dp[i -1][j] || dp[i - 1][j - nums[i - 1]])
        }
      }
    }
    return dp[n][sum]
};

// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function(nums) {
  if (nums.length < 2) return false

  const total = nums.reduce((a, c) => a + c)
  if (total % 2 !== 0) return false

  nums.sort((a, b) => b - a)
  const target = total / 2

  if (nums[0] > target) return false
  return findCombination(nums, target, 0)
}

function findCombination(nums, target, start) {
  if (target === 0) {
    return true
  } else {
    for (let i = start; i < nums.length; i++) {
      if (nums[i] <= target) {
        if (findCombination(nums, target - nums[i], i + 1)) {
          return true
        }
      }
    }
    return false
  }
}

// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function helper(nums, target, pos) {
  for (let i = pos; i <= nums.length; i++) {
    if (i != pos && nums[i] == nums[i - 1]) continue
    if (nums[i] === target) return true
    if (nums[i] > target) break
    if (helper(nums, target - nums[i], i + 1)) return true
  }
  return false
}
const canPartition = function(nums) {
  const sum = nums.reduce((sum, n) => (sum += n), 0) / 2
  if (sum % 1 != 0) {
    return false
  }

  return helper(nums, sum, 0)
}

// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  const sumA = nums.reduce((acc, curr) => acc + curr, 0)
  if (sumA % 2) return false
  let row = 1n << BigInt(sumA / 2)
  for (const weight of nums) row = row | (row >> BigInt(weight))
  /*
     check the the column corresponding to my target by bitwise ANDing
     it with just 1,so if the first bit is 1,
     it will return true, otherwise false
     */
  return row & 1n
}

