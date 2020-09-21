/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
const isPrintable = function (targetGrid) {
  const posMin = Array.from({ length: 61 }, () => Array(2).fill(61))
  const posMax = Array.from({ length: 61 }, () => Array(2).fill(0))
  const m = targetGrid.length
  const n = targetGrid[0].length
  let colorSet = new Set()

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let c = targetGrid[i][j]
      colorSet.add(c)
      posMin[c][0] = Math.min(posMin[c][0], i) // Up
      posMin[c][1] = Math.min(posMin[c][1], j) // Left
      posMax[c][0] = Math.max(posMax[c][0], i) // Down
      posMax[c][1] = Math.max(posMax[c][1], j) // Right
    }
  }
  while (colorSet.size > 0) {
    const tmp = new Set()
    for (let color of colorSet) {
      if (!isRect(targetGrid, color)) {
        tmp.add(color)
      }
    }

    if (tmp.size === colorSet.size) return false
    colorSet = tmp
  }

  return true

  function isRect(A, c) {
    for (let i = posMin[c][0]; i <= posMax[c][0]; i++) {
      for (let j = posMin[c][1]; j <= posMax[c][1]; j++) {
        if (A[i][j] > 0 && A[i][j] !== c) return false
      }
    }

    for (let i = posMin[c][0]; i <= posMax[c][0]; i++) {
      for (let j = posMin[c][1]; j <= posMax[c][1]; j++) {
        A[i][j] = 0
      }
    }
    return true
  }
}
