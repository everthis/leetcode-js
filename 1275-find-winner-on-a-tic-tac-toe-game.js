/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
  const grid = Array.from({ length: 3 }, () => Array(3).fill(''))
  for(let i = 0, n = moves.length; i < n; i++) {
    const ch = i % 2 === 0 ? 'X' : 'O'
    const [r, c] = moves[i]
    grid[r][c] = ch
    const res = chk(ch, grid)
    if(res) return ch === 'X' ? 'A' : 'B'
  }
  
  return moves.length < 9 ? 'Pending' : 'Draw'
};

function chk(ch, grid) {
  for(let i = 0; i < 3; i++) {
    if(
      grid[i][0] === ch &&
      grid[i][1] === ch &&
      grid[i][2] === ch
    ) return true
  }
  
  for(let i = 0; i < 3; i++) {
    if(
      grid[0][i] === ch &&
      grid[1][i] === ch &&
      grid[2][i] === ch
    ) return true
  }
  

    if(
      grid[0][0] === ch &&
      grid[1][1] === ch &&
      grid[2][2] === ch
    ) return true  
  
    if(
      grid[0][2] === ch &&
      grid[1][1] === ch &&
      grid[2][0] === ch
    ) return true  
  
  return false
}
