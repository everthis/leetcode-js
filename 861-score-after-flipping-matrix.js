/**
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = function(grid) {
  const m = grid.length, n = grid[0].length
  let res = 0
  res += m * (1 << (n - 1))
  for(let j = 1; j < n; j++) {
    let same = 0
    for(let i = 0; i < m; i++) {
      if(grid[i][0] === grid[i][j]) same++
    }
    res += Math.max(same, m - same) * (1 << (n - 1 - j))
  }
  
  return res
};

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = function(grid) {
  const m = grid.length, n = grid[0].length
  for(let i = 0; i < m; i++) {
    if(grid[i][0] === 0) flipRow(i)
  }
  
  for(let i = 0; i < n; i++) {
    if(cntCol(i, 0) > cntCol(i, 1)) flipCol(i)
  }
  
  let res = 0
  // console.log(grid)
  for(const row of grid) {
    res += parseInt(row.join(''), 2)
  }
  
  return res
  
  
  function flipRow(idx) {
    for(let i = 0; i < n; i++) {
      if(grid[idx][i] === 0) grid[idx][i] = 1
      else grid[idx][i] = 0
    }
  }
  
  function cntCol(idx, target) {
    let res = 0
    for(let i = 0; i < m; i++) {
      if(grid[i][idx] === target) res++
    }
    // console.log(res)
    return res
  }
  
  function flipCol(idx) {
    for(let i = 0; i < m; i++) {
      if(grid[i][idx] === 0) grid[i][idx] = 1
      else grid[i][idx] = 0
    }
  }
};
