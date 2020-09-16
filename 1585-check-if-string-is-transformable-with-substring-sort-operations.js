/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isTransformable = function (s, t) {
  const offset = '0'.charCodeAt(0)
  const indices = Array.from({ length: 10 }, () => [])
  for (let i = s.length - 1; i >= 0; --i) {
    indices[s.charCodeAt(i) - offset].push(i)
  }
  for (const char of t) {
    const digit = char.charCodeAt(0) - offset
    if (indices[digit].length === 0) return false
    const pos = indices[digit][indices[digit].length - 1]
    for (let d = 0; d < digit; ++d) {
      if (indices[d].length && indices[d][indices[d].length - 1] < pos) {
        return false
      }
    }
    indices[digit].pop()
  }
  return true
}
