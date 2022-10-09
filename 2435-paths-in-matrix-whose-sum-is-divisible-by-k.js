const initialize3DArray = (n, m, p) => { let r = []; for (let i = 0; i < n; i++) { let d = []; for (let j = 0; j < m; j++) { let t = Array(p).fill(0); d.push(t); } r.push(d); } return r; };

const mod = 1e9 + 7;
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const numberOfPaths = (grid, k) => {
    const g = grid, K = k
    let n = g.length, m = g[0].length, dp = initialize3DArray(n + 1, m + 1, K);
    dp[0][1][0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = 0; k < K; k++) {
                dp[i + 1][j + 1][(k + g[i][j]) % K] += dp[i][j + 1][k];
                dp[i + 1][j + 1][(k + g[i][j]) % K] %= mod;
                dp[i + 1][j + 1][(k + g[i][j]) % K] += dp[i + 1][j][k];
                dp[i + 1][j + 1][(k + g[i][j]) % K] %= mod;
            }
        }
    }
    return dp[n][m][0];
};
