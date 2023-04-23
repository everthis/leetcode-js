/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
const maximumANDSum = function (nums, numSlots) {
  const n = nums.length
  nums.unshift(0)
  const m = Math.pow(3, numSlots)

  const dp = Array.from({ length: n + 1 }, () => Array(m).fill(-Infinity))
  dp[0][0] = 0

  let ret = 0

  for (let state = 1; state < m; state++) {
    let i = 0
    let temp = state
    while (temp > 0) {
      i += temp % 3
      temp = Math.floor(temp / 3)
    }
    if (i > n) continue

    for (let j = 0; j < numSlots; j++) {
      if (filled(state, j) >= 1) {
        dp[i][state] = Math.max(
          dp[i][state],
          dp[i - 1][state - Math.pow(3, j)] + (nums[i] & (j + 1))
        )
      }
    }
    if (i === n) ret = Math.max(ret, dp[i][state])
  }

  return ret
}

function filled(state, k) {
  for (let i = 0; i < k; i++) state = Math.floor(state / 3)
  return state % 3
}
