/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
const allCellsDistOrder = function(R, C, r0, c0) {
  const matrix = Array.from({ length: R }, () => new Array(C))
  const arr = []
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      arr.push([i, j])
    }
  }

  return arr.sort(
    (a, b) =>
      Math.abs(a[0] - r0) +
      Math.abs(a[1] - c0) -
      (Math.abs(b[0] - r0) + Math.abs(b[1] - c0))
  )
}
