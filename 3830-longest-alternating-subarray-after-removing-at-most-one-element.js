/**
 * @param {number[]} nums
 * @return {number}
 */
var longestAlternating = function(nums) {
    const n = nums.length
  if(n <= 1) return n
  const up = new Array(n).fill(1)
  const down = new Array(n).fill(1)

  for(let i = 1; i < n; i++) {
    if(nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1
      down[i] = 1
    } else if(nums[i] < nums[ i - 1]) {
      down[i] = up[i - 1] + 1
      up[i] = 1
    } else {
      up[i] = 1
      down[i] = 1
    }
  }

  const upRight = new Array(n).fill(1)
  const downRight  = new Array(n).fill(1)

  for(let i = n - 2; i>=0; i--) {
    if(nums[i] < nums[i + 1]) {
      upRight[i] = downRight[i + 1] + 1
      downRight[i] = 1
    } else if(nums[i] > nums[i + 1]) {
      downRight[i] = upRight[i + 1] + 1
      upRight[i] = 1
    } else {
      upRight[i] = 1
      downRight[i] = 1
    }
  }

  let res = 1

  for(let i = 0; i< n; i++) res = Math.max(res, up[i], down[i])

  for(let k = 1; k <= n - 2; k++) {
    if(nums[k - 1] < nums[k + 1]) {
      res = Math.max(res, down[k - 1] + downRight[k + 1])
    } else if(nums[k - 1] > nums[k + 1]) {
      res = Math.max(res, up[k - 1] + upRight[k + 1])
    }
  }


  return res
};
