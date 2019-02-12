/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

const updateMatrix = function (matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const maxDist = rows + cols;
    let dist = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] !== 0) {
          dist[i][j] = hasNeighborZero(i, j, matrix, rows, cols) ? 1 : maxDist;
        }
      }
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (dist[i][j] === 1) {
          dfs(dist, i, j, -1);
        }
      }
    }
  
    return dist;
  };
  
  const dfs = function (dist, row, col, step) {
    if (row < 0 || row >= dist.length || col < 0 || col >= dist[0].length || dist[row][col] <= step) return;
  
    if (step > 0) dist[row][col] = step;
  
    dfs(dist, row + 1, col, dist[row][col] + 1);
    dfs(dist, row - 1, col, dist[row][col] + 1);
    dfs(dist, row, col + 1, dist[row][col] + 1);
    dfs(dist, row, col - 1, dist[row][col] + 1);
  };
  
  const hasNeighborZero = function (row, col, matrix, rows, cols) {
    if (row < rows - 1 && matrix[row + 1][col] === 0) return true;
    if (row > 0 && matrix[row - 1][col] === 0) return true;
    if (col > 0 && matrix[row][col - 1] === 0) return true;
    if (col < cols - 1 && matrix[row][col + 1] === 0) return true;
  
    return false;
  };
