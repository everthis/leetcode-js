/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function (n, m, indices) {
  const oddRows = new BitSet(n),
    oddCols = new BitSet(m)
  let cntRow = 0,
    cntCol = 0
  for (let idx of indices) {
    oddRows.flip(idx[0])
    oddCols.flip(idx[1])
    cntRow += oddRows.get(idx[0]) ? 1 : -1
    cntCol += oddCols.get(idx[1]) ? 1 : -1
  }
  return (m - cntCol) * cntRow + (n - cntRow) * cntCol
}

class BitSet {
  constructor(n) {
    this.arr = Array(n).fill(0)
  }
  flip(idx) {
    this.arr[idx] = this.arr[idx] === 0 ? 1 : 0
  }
  get(idx) {
    return this.arr[idx]
  }
}
