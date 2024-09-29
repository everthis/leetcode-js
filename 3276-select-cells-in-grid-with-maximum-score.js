/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const values = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      values.push([grid[i][j], i, j])
    }
  }

  values.sort((a, b) => b[0] - a[0])
  const dp = {}

  return recur(values, 0, 0, dp)
}

function recur(values, idx, mask_row, dp) {
  const n = values.length
  if (idx === n) return 0

  const key = `${idx},${mask_row}`
  if (key in dp) return dp[key]

  let ans = 0
  const row = values[idx][1]
  if ((1 << row) & mask_row) {
    ans += recur(values, idx + 1, mask_row, dp)
  } else {
    let j = idx
    while (j < n && values[idx][0] === values[j][0]) j++

    const ans1 = values[idx][0] + recur(values, j, mask_row | (1 << row), dp)
    const ans2 = recur(values, idx + 1, mask_row, dp)

    ans = Math.max(ans1, ans2)
  }

  dp[key] = ans
  return ans
}
