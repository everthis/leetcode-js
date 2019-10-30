const isValid = (arr, row, col) => {
  const isRow = row >= 0 && row < arr.length;
  const isCol = isRow && col >= 0 && col < arr[row].length;
  return isRow && isCol;
};

const moves = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1]
];

const num = (arr, row, col, val) => {
  let count = 0;
  moves.forEach(move => {
    const r = row + move[0];
    const c = col + move[1];
    if (isValid(arr, r, c) && arr[r][c] === val) {
      count++;
    }
  });
  return count;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
  const newArr = Array(board.length)
    .fill(null)
    .map(() => Array(board[0].length).fill(0));
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const ones = num(board, row, col, 1);

      newArr[row][col] = board[row][col];
      if (board[row][col] === 1) {
        if (ones < 2 || ones > 3) {
          newArr[row][col] = 0;
        }
      } else if (ones === 3) {
        newArr[row][col] = 1;
      }
    }
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = newArr[row][col];
    }
  }
};
