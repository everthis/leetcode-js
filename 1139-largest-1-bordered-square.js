/**
 * @param {number[][]} grid
 * @return {number}
 */
const largest1BorderedSquare = function(grid) {
  let A = grid;
  let m = A.length,
    n = A[0].length;
  let max = 0;
  const hori = Array.from(Array(m)).map(() => Array(n).fill(0));
  const ver = Array.from(Array(m)).map(() => Array(n).fill(0));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i][j] > 0) {
        hori[i][j] = j > 0 ? hori[i][j - 1] + 1 : 1;
        ver[i][j] = i > 0 ? ver[i - 1][j] + 1 : 1;
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let small = Math.min(hori[i][j], ver[i][j]);
      while (small > max) {
        if (ver[i][j - small + 1] >= small && hori[i - small + 1][j] >= small) {
          max = small;
          break
        }
        small--;
      }
    }
  }
  return max * max;
};

