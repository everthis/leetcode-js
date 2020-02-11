/**
 * Initialize your data structure here.
 * @param {number} n
 */
const TicTacToe = function(n) {
  this.n = n
  this.cols = new Array(n).fill(0)
  this.rows = new Array(n).fill(0)
  this.diagonal = 0
  this.antiDiagonal = 0
}

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  const { n } = this
  const toAdd = player === 1 ? 1 : -1
  this.rows[row] += toAdd
  this.cols[col] += toAdd
  if (row === col) {
    this.diagonal += toAdd
  }
  if (col === n - row - 1) {
    this.antiDiagonal += toAdd
  }
  if (
    Math.abs(this.rows[row]) === n ||
    Math.abs(this.cols[col]) === n ||
    Math.abs(this.diagonal) === n ||
    Math.abs(this.antiDiagonal) === n
  ) {
    return player
  }
  return 0
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
