/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function(board) {
  for (let i = 0; i < board.length; ++i)
    for (let j = 0; j < board[i].length; ++j)
      if (board[i][j] == 'R') return cap(board,i,j,0,1)+cap(board,i,j,0,-1)+cap(board,i,j,1,0)+cap(board,i,j,-1,0);
  return 0;  
};

function cap(b, x, y, dx, dy) {
  while (x >= 0 && x < b.length && y >= 0 && y < b[x].length && b[x][y] != 'B') {
    if (b[x][y] == 'p') return 1;
    x += dx; y += dy;
  }
  return 0;
}
