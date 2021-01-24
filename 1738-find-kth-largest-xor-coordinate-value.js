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

// another

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthLargestValue = function(matrix, k) {
    const tmp = []
    const n = matrix.length, m = matrix[0].length
    const dp = Array.from({ length: n }, () => Array(m).fill(0))
    dp[0][0] = matrix[0][0]
    tmp.push(dp[0][0])
    for(let j = 1; j < m; j++) {
      dp[0][j] = dp[0][j - 1] ^ matrix[0][j]
      tmp.push(dp[0][j])
    }
    for(let i = 1; i < n; i++) {
      dp[i][0] = dp[i - 1][0] ^ matrix[i][0]
      tmp.push(dp[i][0])
    }
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[i][j] = dp[i][j - 1] ^ dp[i - 1][j] ^ matrix[i][j] ^ dp[i - 1][j - 1]
            tmp.push(dp[i][j])
        }
    }
    tmp.sort((a, b) => b - a)
    return tmp[k - 1]
};

