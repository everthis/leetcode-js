/**
 * @param {number} N
 * @return {number}
 */
const confusingNumberII = function (N) {
  const valid = [
    [0, 0],
    [1, 1],
    [6, 9],
    [8, 8],
    [9, 6],
  ]
  function dfs(num, rotated, order) {
    let count = 0
    if (num !== rotated) count++
    for (const [dig, rot] of valid) {
      if (num === 0 && dig === 0) continue
      if (num * 10 + dig > N) break
      count += dfs(num * 10 + dig, rot * order + rotated, order * 10)
    }
    return count
  }
  return dfs(0, 0, 1)
}
