/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function (word, k) {
  const n = Math.floor(word.length / k)
  const map = new Map()

  for (let i = 0; i < word.length; i += k) {
    const sub = word.substring(i, i + k)
    map.set(sub, (map.get(sub) || 0) + 1)
  }

  return n - Math.max(...map.values())
}
