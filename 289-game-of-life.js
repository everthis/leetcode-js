/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
  const DIRECTIONS = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1]
  ];

  const isValid = function(x, y) {
    if (x >= 0 && y >= 0 && x < board.length && y < board[0].length)
      return true;
    else return false;
  };

  const getAliveNeighbors = function(x, y) {
    let aliveNeighs = 0;
    for (let dir of DIRECTIONS) {
      let newX = x + dir[0];
      let newY = y + dir[1];
      if (!isValid(newX, newY)) continue;
      if (board[newX][newY] === 1 || board[newX][newY] === -1) {
        aliveNeighs++;
      }
    }

    return aliveNeighs;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let aliveNeighbors = getAliveNeighbors(row, col);
      if (board[row][col] === 0) {
        if (aliveNeighbors === 3) board[row][col] = 2;
        else board[row][col] = 0;
      } else {
        if (aliveNeighbors === 2 || aliveNeighbors === 3) board[row][col] = 1;
        else board[row][col] = -1;
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] > 0) board[row][col] = 1;
      else board[row][col] = 0;
    }
  }
};
