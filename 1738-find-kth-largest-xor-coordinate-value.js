/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
    let m = matrix.length;
    let n = matrix[0].length;
    const v = [], d = Array(n).fill(0);
    d[0] = matrix[0][0];
    v.push(d[0]);
    for (let i = 1; i < n; ++i) {
      d[i] = matrix[0][i] ^ d[i - 1];
      v.push(d[i]);
    }
    for (let i = 1; i < m; ++i) {
      let cur = matrix[i][0];
      d[0] ^= cur;
      v.push(d[0]);
      for (let j = 1; j < n; ++j) {
        cur ^= matrix[i][j];
        d[j] ^= cur;
        v.push(d[j]);
      }
    }
    v.sort((a, b) => b - a)
    return v[k - 1];
};


