/**
 * @param {string} s
 * @return {number}
 */
const longestRepeatingSubstring = function(s) {
    const n = s.length;
    // dp[i][j] means # of repeated chars for substrings ending at i and j
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    let res = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (s.charAt(i - 1) === s.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(res, dp[i][j]);
            }
        }
    }
    return res;
};
