/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = function(matrix) {
  const res = []
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return res
  const rows = matrix.length
  const cols = matrix[0].length
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false))
  const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false))
  for (let y = 0; y < rows; y++) {
    helper(0, y, pacific, -1, matrix, cols, rows, dirs)
    helper(cols - 1, y, atlantic, -1, matrix, cols, rows, dirs)
  }
  for (let x = 0; x < cols; x++) {
    helper(x, 0, pacific, -1, matrix, cols, rows, dirs)
    helper(x, rows - 1, atlantic, -1, matrix, cols, rows, dirs)
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (pacific[y][x] && atlantic[y][x]) {
        res.push([y, x])
      }
    }
  }
  return res
}

function helper(x, y, visited, height, matrix, cols, rows, dirs) {
  if (x < 0 || x >= cols || y < 0 || y >= rows || visited[y][x] || matrix[y][x] < height) return
  visited[y][x] = true
  for (let dir of dirs)
    helper(x + dir[0], y + dir[1], visited, matrix[y][x], matrix, cols, rows, dirs)
}
