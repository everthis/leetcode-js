/**
 * @param {number[]} nums
 * @return {number}
 */
const specialPerm = function (nums) {
  const s = new Solution()
  return s.specialPerm(nums)
}

class Solution {
  constructor() {
    this.dp = []
  }
  solve(nums, previdx, chosenIndices) {
    if (chosenIndices.length === nums.length) {
      return 1
    }

    let mask = 0
    for (let index of chosenIndices) {
      mask |= 1 << index
    }

    if (this.dp[previdx + 1][mask] !== -1) {
      return this.dp[previdx + 1][mask]
    }

    let tot = 0
    for (let j = 0; j < nums.length; j++) {
      if (chosenIndices.includes(j)) {
        continue
      }
      if (
        previdx === -1 ||
        nums[previdx] % nums[j] === 0 ||
        nums[j] % nums[previdx] === 0
      ) {
        chosenIndices.push(j)
        tot += this.solve(nums, j, chosenIndices)
        tot %= 1000000007
        chosenIndices.pop()
      }
    }
    return (this.dp[previdx + 1][mask] = tot)
  }

  specialPerm(nums) {
    this.dp = new Array(20)
      .fill(-1)
      .map(() => new Array((1 << nums.length) + 5).fill(-1))
    let chosenIndices = []
    return this.solve(nums, -1, chosenIndices)
  }
}
