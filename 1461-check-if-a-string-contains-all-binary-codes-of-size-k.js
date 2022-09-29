/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = function (s, k) {
  if (s.length < k) return false
  const set = new Set()
  for (let i = 0; i <= s.length - k; i++) {
    set.add(s.slice(i, i + k))
  }

  return set.size == Math.pow(2, k)
}
