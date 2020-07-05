/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let d = 0
  let h = x ^ y
  while (h > 0) {
    d++
    h &= h - 1
  }
  return d
}
