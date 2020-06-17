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

// another

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  if (!board || board.length === 0 || board[0].length === 0) return;
  const n = board.length;
  const m = board[0].length;
    const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const bfs = (board, n, m, i, j) => {
    const queue = [];
    queue.push([i, j]);
    board[i][j] = "1";
    while (queue.length > 0) {
      const pos = queue.shift();
      for (let k = 0; k < 4; k++) {
        i = pos[0] + dirs[k][0];
        j = pos[1] + dirs[k][1];
        if (i >= 0 && i < n && j >= 0 && j < m && board[i][j] === "O") {
          board[i][j] = "1";
          queue.push([i, j]);
        }
      }
    }
  };
  // scan the borders and mark the 'O's to '1'
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (
        (i === 0 || i === n - 1 || j === 0 || j === m - 1) &&
        board[i][j] === "O"
      ) {
        bfs(board, n, m, i, j);
      }
    }
  }
  // scan the inner area and mark the 'O's to 'X'
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
  // reset all the '1's to 'O's
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "1") {
        board[i][j] = "O";
      }
    }
  }
};
