/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const removeOnes = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const first = grid[0], firstFliped = flip(first)
  for(let i = 1; i < m; i++) {
    if(!equal(first, grid[i]) && !equal(firstFliped, grid[i])) return false
  }
  
  return true
  
  function flip(arr) {
    const res = []
    for(const e of arr) {
      res.push(e === 1 ? 0 : 1)
    }
    return res
  }
  
  function equal(a, b) {
    const n = a.length
    for(let i = 0; i < n; i++) {
      if(a[i] !== b[i]) return false
    }
    
    return true
  }
};
