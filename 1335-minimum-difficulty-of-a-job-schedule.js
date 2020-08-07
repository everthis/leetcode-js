/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
const minDifficulty = function (jobDifficulty, d) {
  if (jobDifficulty.length < d) return -1
  const cache = {}
  const dfs = (start, numDays) => {
    if (numDays === d) {
      return start === jobDifficulty.length ? 0 : Infinity
    }
    const key = `${start}-${numDays}`
    if (cache[key] !== undefined) return cache[key]
    const end = jobDifficulty.length - d + numDays
    let result = Infinity
    let max = -Infinity
    for (let i = start; i <= end; i++) {
      max = Math.max(max, jobDifficulty[i])
      result = Math.min(result, max + dfs(i + 1, numDays + 1))
    }
    return (cache[key] = result)
  }
  return dfs(0, 0)
}
