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

// another

/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
  const aRow = Array(3).fill(0), aCol = Array(3).fill(0), bRow= Array(3).fill(0), bCol =Array(3).fill(0)
  let ad = 0, ads = 0, bd = 0, bds = 0
  for(let i = 0; i < moves.length; i++) {
    const [r, c] = moves[i]
    if(i % 2===0) {
      if(++aRow[r] === 3 || ++aCol[c] === 3 || r === c && ++ad === 3 || r + c === 2&& ++ads === 3 ) return 'A'
    }else {
      if(++bRow[r] === 3 || ++bCol[c] === 3 || r === c && ++bd === 3 || r + c === 2&& ++bds === 3 ) return 'B'
    }
  }
  
  return moves.length >= 9 ? 'Draw' : 'Pending'
};
