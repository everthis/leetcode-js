/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = function (row) {
  let res = 0,
    N = row.length
  const ptn = new Array(N).fill(0)
  const pos = new Array(N).fill(0)
  for (let i = 0; i < N; i++) {
    ptn[i] = i % 2 === 0 ? i + 1 : i - 1
    pos[row[i]] = i
  }
  for (let i = 0; i < N; i++) {
    for (let j = ptn[pos[ptn[row[i]]]]; i !== j; j = ptn[pos[ptn[row[i]]]]) {
      swap(row, i, j)
      swap(pos, row[i], row[j])
      res++
    }
  }
  return res
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
