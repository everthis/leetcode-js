/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const getBiggestThree = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  const res = []
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      for(let size = 0; i - size >= 0 && i + size < rows && j + size * 2 < cols; size++) {
        let tmp = 0, r = i, c = j
        do {tmp += grid[r++][c++]} while(r < rows && c < cols && r < i + size)
        if(size > 0) {
          do {tmp += grid[r--][c++]} while(c < cols && c < j + 2 * size)
          do {tmp += grid[r--][c--]} while(r > 0 && r > i - size)
          do {tmp += grid[r++][c--]} while(c > 0 && r < i)
        }
        if(res.indexOf(tmp) === -1) res.push(tmp)
        if(res.length > 3) {
          res.sort((a, b) => b - a)
          res.splice(3)
        }
      }
    }
  }
  res.sort((a, b) => b - a)
  return res
}
