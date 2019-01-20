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
