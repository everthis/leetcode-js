/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  const res = []
  bt(res, n)
  return res
}

function bt(res, n, board = [], r = 0) {
  if (r === n) {
    res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)))
    return
  }
  for (let c = 0; c < n; c++) {
    if (
      !board.some(
        (bc, br) => bc === c || bc === c + r - br || bc === c - r + br
      )
    ) {
      board.push(c)
      bt(res, n, board, r + 1)
      board.pop()
    }
  }
}
