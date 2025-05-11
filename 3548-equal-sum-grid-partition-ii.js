/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const n = grid.length
  const m = grid[0].length

  let totalRowSum = 0n,
    totalColSum = 0n
  const prefixRowWise = new Array(n).fill(0n)
  const prefixColWise = new Array(m).fill(0n)

  const MAXV = 100000
  const minRow = new Array(MAXV + 1).fill(null)
  const maxRow = new Array(MAXV + 1).fill(null)
  const minCol = new Array(MAXV + 1).fill(null)
  const maxCol = new Array(MAXV + 1).fill(null)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const v = grid[i][j]
      const val = BigInt(v)
      prefixRowWise[i] += val
      prefixColWise[j] += val

      if (minRow[v] === null) {
        minRow[v] = maxRow[v] = i
        minCol[v] = maxCol[v] = j
      } else {
        if (i < minRow[v]) minRow[v] = i
        if (i > maxRow[v]) maxRow[v] = i
        if (j < minCol[v]) minCol[v] = j
        if (j > maxCol[v]) maxCol[v] = j
      }
    }
  }

  for (const r of prefixRowWise) totalRowSum += r
  totalColSum = totalRowSum

  let currentRowUpperSum = 0n
  for (let i = 0; i < n - 1; i++) {
    currentRowUpperSum += prefixRowWise[i]
    const lowerSegmentSum = totalRowSum - currentRowUpperSum
    if (currentRowUpperSum === lowerSegmentSum) return true

    if (currentRowUpperSum > lowerSegmentSum) {
      const diff = currentRowUpperSum - lowerSegmentSum
      if (diff <= MAXV && minRow[Number(diff)] !== null) {
        if (i === 0 || m === 1) {
          if (diff === BigInt(grid[0][0]) || diff === BigInt(grid[0][m - 1]))
            return true
        } else if (minRow[Number(diff)] <= i) {
          return true
        }
      }
    } else {
      const diff = lowerSegmentSum - currentRowUpperSum
      if (diff <= MAXV && maxRow[Number(diff)] !== null) {
        if (i === n - 2 || m === 1) {
          if (
            diff === BigInt(grid[i + 1][0]) ||
            diff === BigInt(grid[i + 1][m - 1])
          )
            return true
        } else if (maxRow[Number(diff)] > i) {
          return true
        }
      }
    }
  }

  let currentColLeftSum = 0n
  for (let j = 0; j < m - 1; j++) {
    currentColLeftSum += prefixColWise[j]
    const rightSegmentSum = totalColSum - currentColLeftSum
    if (currentColLeftSum === rightSegmentSum) return true

    if (currentColLeftSum > rightSegmentSum) {
      const diff = currentColLeftSum - rightSegmentSum
      if (diff <= MAXV && minCol[Number(diff)] !== null) {
        if (j === 0 || n === 1) {
          if (diff === BigInt(grid[0][0]) || diff === BigInt(grid[n - 1][0]))
            return true
        } else if (minCol[Number(diff)] <= j) {
          return true
        }
      }
    } else {
      const diff = rightSegmentSum - currentColLeftSum
      if (diff <= MAXV && maxCol[Number(diff)] !== null) {
        if (j === m - 2 || n === 1) {
          if (
            diff === BigInt(grid[0][j + 1]) ||
            diff === BigInt(grid[n - 1][j + 1])
          )
            return true
        } else if (maxCol[Number(diff)] > j) {
          return true
        }
      }
    }
  }

  return false
}
