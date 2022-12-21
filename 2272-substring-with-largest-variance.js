/**
 * @param {string} s
 * @return {number}
 */
const largestVariance = (s) => {
  let se = new Set(s),
    n = s.length,
    res = 0
  for (const x of se) {
    // max
    for (const y of se) {
      // min
      if (x != y) {
        let pre = Array(n + 1).fill(0),
          preX,
          preY,
          diff = 0
        for (let i = 0; i < n; i++) {
          if (s[i] == x) {
            preX = i + 1
            diff++
          }
          if (s[i] == y) {
            preY = i + 1
            diff--
          }
          pre[i + 1] = Math.min(pre[i], diff)
          if (preX == undefined || preY == undefined) continue
          res = Math.max(res, diff - pre[Math.min(preX, preY) - 1])
        }
      }
    }
  }
  return res
}

