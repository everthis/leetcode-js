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
