/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
const restoreMatrix = function(rowSum, colSum) {
  const m = rowSum.length, n = colSum.length;
  const res = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m; ++i) {
    for (let j = 0 ; j < n; ++j) {
      res[i][j] = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= res[i][j];
      colSum[j] -= res[i][j];
    }
  }
  return res;
};
