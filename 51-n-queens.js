/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  const res = []
  const chess = Array.from({length: n}, () => new Array(n).fill('.'))
  bt(res, chess, 0)
  return res
}

function bt(res, chess, row) {
  if(row === chess.length) {
    res.push(build(chess))
    return
  }
  for(let i = 0, num = chess[0].length; i < num; i++) {
    if(valid(chess, row, i)) {
      chess[row][i] = 'Q'
      bt(res, chess, row + 1)
      chess[row][i] = '.'
    }
  }
}

function valid(chess, row, col) {
  for(let i = row - 1; i >= 0; i--) {
    if(chess[i][col] === 'Q') return false
  }
  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if(chess[i][j] === 'Q') return false
  }
  for(let i = row - 1, j = col + 1; i >= 0 && j < chess[0].length; i--, j++) {
    if(chess[i][j] === 'Q') return false
  }
  return true
}

function build(chess) {
  return chess.map(el => el.join(''))
}

// another

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
