/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
  const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      let res = dfs(board, i, j, dirs, word, 0);
      if (res) {
        return true;
      }
    }
  }
  return false;
};

function dfs(board, x, y, dirs, word, start) {
  if (start >= word.length) return true;
  if (x < 0 || y < 0 || x >= board[0].length || y >= board.length) return false;
  if (word[start] !== board[y][x] || board[y][x] === "#") return false;

  let res = false;
  let c = board[y][x];
  board[y][x] = "#";
  for (let el of dirs) {
    let posx = x + el[0];
    let posy = y + el[1];
    res = res || dfs(board, posx, posy, dirs, word, start + 1);
    if (res) return true;
  }
  board[y][x] = c;

  return false;
}

// time complexity: O(M * N * 3^L), where L is the length of word.
// we have a visited array and we never go back, so 3 directions

// another

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
  if (!word || !board || board.length === 0) return false
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (searchWord(board, row, col, word, 0, dirs)) return true
    }
  }
  return false
}

const searchWord = (board, row, col, word, widx, dirs) => {
  if (widx === word.length) return true
  if (
    row < 0 ||
    col < 0 ||
    row === board.length ||
    col === board[0].length ||
    board[row][col] === null ||
    board[row][col] !== word[widx]
  ) return false

  const ch = board[row][col]
  board[row][col] = null // mark visited

  for (let dir of dirs) {
    if (searchWord(board, row + dir[0], col + dir[1], word, widx + 1, dirs)) {
      return true
    }
  }
  board[row][col] = ch // recover
}
