/**
 * @param {string[]} board
 * @return {boolean}
 */
const validTicTacToe = function(board) {
  if (board.length == 0) return false
  // turns = 0 represents 'X' will move, otherwise, 'O' will move
  let turns = 0
  // check whether 'X' wins or 'O' wins, or no players win
  let xWin = isGameOver(board, 'X')
  let oWin = isGameOver(board, 'O')

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i].charAt(j) == 'X') turns++
      else if (board[i].charAt(j) == 'O') turns--
    }
  }

  /**
   * Four conditions will be the invalid tic tac toe board:
   * 1. there are more 'O' than 'X'
   * 2. the board has 2 more 'X' than 'O'
   * 3. number of 'X' is equal to number of 'O', but 'X' wins, it is impossible because if 'X' wins, the game is
   * over, 'O' cannot play again, then number of 'O' MUST less than 'X'
   * 4. number of 'X' is more than number of 'O', but 'O' wins, it is impossible because if 'O' wins, the game is
   * over, 'X' cannot play again, then number of 'X' CANNOT greater than 'O'
   * */
  if (turns < 0 || turns > 1 || (turns == 0 && xWin) || (turns == 1 && oWin))
    return false
  return true
}

function isGameOver(board, player) {
  // check horizontal
  for (let i = 0; i < 3; i++) {
    if (
      board[i].charAt(0) === player &&
      board[i].charAt(0) === board[i].charAt(1) &&
      board[i].charAt(1) === board[i].charAt(2)
    ) {
      return true
    }
  }

  // check vertical
  for (let j = 0; j < 3; j++) {
    if (
      board[0].charAt(j) == player &&
      board[0].charAt(j) == board[1].charAt(j) &&
      board[1].charAt(j) == board[2].charAt(j)
    ) {
      return true
    }
  }

  // check diagonal
  if (
    board[1].charAt(1) == player &&
    ((board[0].charAt(0) == board[1].charAt(1) &&
      board[1].charAt(1) == board[2].charAt(2)) ||
      (board[0].charAt(2) == board[1].charAt(1) &&
        board[1].charAt(1) == board[2].charAt(0)))
  ) {
    return true
  }
  return false
}
