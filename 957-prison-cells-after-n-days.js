/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const prisonAfterNDays = function (cells, N) {
  const temp = [...cells]
  const maxIter = 2 * cells.length - 2
  N = N % maxIter === 0 ? maxIter : N % maxIter
  while (N > 0) {
    for (let i = 0; i < cells.length; i++) {
      temp[i] = cells[i - 1] === cells[i + 1] ? 1 : 0
    }
    cells = [...temp]
    N--
  }
  return cells
}
