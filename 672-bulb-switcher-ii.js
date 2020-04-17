/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const flipLights = function (n, m) {
  n = Math.min(n, 3)
  if (m === 0) return 1
  if (m === 1) return n === 1 ? 2 : n === 2 ? 3 : 4
  if (m === 2) return n === 1 ? 2 : n === 2 ? 4 : 7
  return n === 1 ? 2 : n === 2 ? 4 : 8
}
