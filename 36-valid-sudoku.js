/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const n = 9
  const m = 3
  const row = [],
    col = [],
    block = []
  for (let i = 0; i < n; i++) {
    row[i] = new Set()
    col[i] = new Set()
    block[i] = new Set()
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const ch = board[r][c]
      if (ch === '.') continue
      const b = Math.floor(r / m) * m + Math.floor(c / m)
      if (row[r].has(ch) || col[c].has(ch) || block[b].has(ch)) return false
      row[r].add(ch)
      col[c].add(ch)
      block[b].add(ch)
    }
  }
  return true
}

// another

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  let seen = new Set()
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      let number = board[i][j]
      if (number != '.')
        if (
          !hset(seen, number + ' in row ' + i) ||
          !hset(seen, number + ' in column ' + j) ||
          !hset(seen, number + ' in block ' + ~~(i / 3) + '-' + ~~(j / 3))
        )
          return false
    }
  }
  return true
}
function hset(s, val) {
  if (s.has(val)) return false
  else {
    s.add(val)
    return true
  }
}
