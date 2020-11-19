/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
const getMaxGridHappiness = (m, n, introvertsCount, extrovertsCount) => {
  const state = '0'.repeat(n)
  const memo = new Map()
  return helper(state, 0, n, m, introvertsCount, extrovertsCount, memo)
}
function helper(state, idx, n, m, inCount, exCount, memo) {
  if ((inCount === 0 && exCount === 0) || idx === m * n) return 0
  let key = idx + state + inCount + exCount
  if (memo.has(key)) return memo.get(key)
  const r = (idx / n) >> 0,
    c = idx % n
  let best = 0
  if (inCount !== 0) {
    let score = 120
    if (r > 0) score = calc(state.charAt(0) - '0', 1, score)
    if (c !== 0) score = calc(state.charAt(state.length - 1) - '0', 1, score)
    best =
      score +
      helper(state.slice(1) + '1', idx + 1, n, m, inCount - 1, exCount, memo)
  }
  if (exCount !== 0) {
    let score = 40
    if (r > 0) score = calc(state.charAt(0) - '0', 2, score)
    if (c !== 0) score = calc(state.charAt(state.length - 1) - '0', 2, score)
    best = Math.max(
      best,
      score +
        helper(state.slice(1) + '2', idx + 1, n, m, inCount, exCount - 1, memo)
    )
  }
  best = Math.max(
    best,
    helper(state.slice(1) + '0', idx + 1, n, m, inCount, exCount, memo)
  )
  memo.set(key, best)
  return best
}

function calc(p1, p2, score) {
  if (p1 === 1 && p2 === 1) return score - 60
  else if (p1 === 2 && p2 === 2) return score + 40
  else if (p1 === 1 && p2 === 2) return score - 10
  else if (p1 === 2 && p2 === 1) return score - 10
  return score
}
