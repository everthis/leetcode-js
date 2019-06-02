/**
 * @param {number[][]} matrix
 * @return {number}
 */
const maxEqualRowsAfterFlips = function(matrix) {
  let n = matrix.length,
    m = matrix[0].length;
  let ret = 0;
  for (let i = 0; i < n; i++) {
    let ct = 0;
    inner: for (let j = i; j < n; j++) {
      if (ae(matrix[i], matrix[j])) {
        ct++;
      } else {
        for (let k = 0; k < m; k++) {
          if (matrix[i][k] + matrix[j][k] !== 1) continue inner;
        }
        ct++;
      }
    }
    ret = Math.max(ret, ct);
  }
  return ret;
};

function ae(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}
