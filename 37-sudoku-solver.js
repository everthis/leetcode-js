/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
  dfs(0, 0)
  function dfs(row, col) {
    if (row === 9) return true
    if (col === 9) return dfs(row + 1, 0)
    if (board[row][col] === ".") {
      for (let num = 1; num <= 9; num++) {
        if (isValid(row, col, `${num}`)) {
          board[row][col] = `${num}`
          if (dfs(row, col + 1)) return true
          board[row][col] = "."
        }
      }
    } else {
      return dfs(row, col + 1)
    }
    return false
  }
  function isValid(row, col, num) {
    for (let rowIdx = 0; rowIdx < 9; rowIdx++) if (board[rowIdx][col] === num) return false
    for (let colIdx = 0; colIdx < 9; colIdx++) if (board[row][colIdx] === num) return false

    let squareRowStart = row - (row % 3)
    let squareColStart = col - (col % 3)
    for (let rIdx = 0; rIdx < 3; rIdx++) {
      for (let cIdx = 0; cIdx < 3; cIdx++) {
        if (board[squareRowStart + rIdx][squareColStart + cIdx] === num) return false
      }
    }
    return true
  }
}


// another

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
  helper(board, 0 , 0)
};

function helper(board, row, col) {
  for(let i = row, m = board.length; i < m; i++, col = 0) {
    for(let j = col, n = board[0].length; j < n; j++) {
      if(board[i][j] !== '.') continue
      for(let k = 1; k <= 9; k++) {
        const ch = `${k}`
        const res = valid(board, i, j, ch)
        if(res) {
          board[i][j] = ch
          if(helper(board, i, j + 1)) return true
          else {
            board[i][j] = '.'
          }
        }
      }
      return false
    }
  }
  return true
}


function valid(board, row, col, ch) {
  const blkRow = ~~(row / 3), blkCol = ~~(col / 3)
  for(let i = 0; i < 9; i++) {
    if(board[row][i] === ch) return false
    if(board[i][col] === ch) return false
    if(board[blkRow * 3 + Math.floor(i / 3)][blkCol * 3 + (i % 3)] === ch) return false
  }
  return true
}
