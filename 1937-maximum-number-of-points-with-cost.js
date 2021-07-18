/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function(points) {
    let m = points.length, n = points[0].length;
    let result = 0;
    // dp
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0) {
                dp[i][j] = points[i][j];
            } else {
                dp[i][j] = Math.max(points[i][j] + dp[i - 1][j], dp[i][j]);
            }
        }
        for (let j = 0; j < n; j++) {
            // right
            for (let k = 1; k < n - j; k++) {
                if (dp[i][j + k] >= dp[i][j] - k) {
                    break;
                }
                dp[i][j + k] = dp[i][j] - k;
            }
            for (let k = 1; k <= j; k++) {
                if (dp[i][j - k] >= dp[i][j] - k) {
                    break;
                }
                dp[i][j - k] = dp[i][j] - k;
            }
        }
    }
    for (let j = 0; j < n; j++) {
        result = Math.max(result, dp[m - 1][j]);
    }
    return result;
};
