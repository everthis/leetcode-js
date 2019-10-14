/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
  if (!board || board.length < 3 || board[0].length < 3) return;
  let r = board.length;
  let c = board[0].length;
  for (let i = 0; i < c; i++) {
    if (board[0][i] === "O") search(board, 0, i);
    if (board[r - 1][i] === "O") search(board, r - 1, i);
  }
  for (let i = 0; i < r; i++) {
    if (board[i][0] === "O") search(board, i, 0);
    if (board[i][c - 1] === "O") search(board, i, c - 1);
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      if (board[i][j] === "*") board[i][j] = "O";
    }
  }
};

function search(board, i, j) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
  if (board[i][j] !== "O") return;
  board[i][j] = "*";
  search(board, i + 1, j);
  search(board, i - 1, j);
  search(board, i, j + 1);
  search(board, i, j - 1);
}
