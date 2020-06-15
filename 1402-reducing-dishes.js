/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = function (satisfaction, max = 0) {
  satisfaction.sort((a, b) => b - a)
  for (let j = 1; j <= satisfaction.length; ++j) {
    let next = 0
    for (let i = 0, k = j; i < j; ++i, --k) next += satisfaction[i] * k
    max = Math.max(max, next)
  }
  return max
}
