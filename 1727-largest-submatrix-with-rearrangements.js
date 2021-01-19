/**
 * @param {number[][]} matrix
 * @return {number}
 */
const largestSubmatrix = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const cols = Array(m).fill(0)
    let res = 0
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < m; j++) {
        cols[j] = matrix[i][j] === 1 ? cols[j] + 1 : 0
      }
      const tmp = cols.slice()
      tmp.sort((a, b) => b - a)
      for(let j = 0; j < m; j++) {
        res = Math.max(res, (j + 1) * tmp[j])
      }
    }
    return res
};

