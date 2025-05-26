/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function (n, present, future, hierarchy, budget) {
  const freq = {}
  for (const [p, c] of hierarchy) {
    if (!freq[p]) freq[p] = []
    freq[p].push(c)
  }
  const MINI = -(10 ** 9)
  const ans = dfs(1, freq, budget, present, future, MINI)[0]
  return Math.max(...ans)

  function dfs(u, freq, budget, present, future, MINI) {
    const dp = (freq[u] || []).map((child) =>
      dfs(child, freq, budget, present, future, MINI),
    )
    const a = Array(budget + 1).fill(MINI)
    const b = Array(budget + 1).fill(MINI)

    for (let v = 0; v < 2; v++) {
      let x = Array(budget + 1).fill(MINI)
      let y = Array(budget + 1).fill(MINI)
      x[0] = 0
      const c = v === 0 ? present[u - 1] : Math.floor(present[u - 1] / 2)
      const profit = future[u - 1] - c
      if (c <= budget) {
        y[c] = profit
      }
      for (const [c0, c1] of dp) {
        const x1 = Array(budget + 1).fill(MINI)
        const y1 = Array(budget + 1).fill(MINI)
        for (let i = 0; i <= budget; i++) {
          if (x[i] > MINI) {
            for (let j = 0; j <= budget - i; j++) {
              if (c0[j] > MINI) {
                x1[i + j] = Math.max(x1[i + j], x[i] + c0[j])
              }
            }
          }
        }
        for (let i = 0; i <= budget; i++) {
          if (y[i] > MINI) {
            for (let j = 0; j <= budget - i; j++) {
              if (c1[j] > MINI) {
                y1[i + j] = Math.max(y1[i + j], y[i] + c1[j])
              }
            }
          }
        }
        x = x1
        y = y1
      }
      const dp1 = v === 0 ? a : b
      for (let i = 0; i <= budget; i++) {
        dp1[i] = Math.max(x[i], y[i])
      }
    }
    return [a, b]
  }
}
