/**
 * @param {number} n
 * @param {number[][]} requirements
 * @return {number}
 */
var numberOfPermutations = function(n, requirements) {
    // setup map/vector for tracking inversions
    let inv = new Array(n + 1).fill(-1);
    for (let req of requirements) {
        if (inv[req[0] + 1] === -1) {
            inv[req[0] + 1] = req[1];
        } else {
            return 0;
        }
    }

    // sanity check
    // if length of the sequence is l 
    // then there can be at most l*(l-1)/2 inversion pairs
    // in the case of decreasing order
    for (let i = 1; i <= n; i++) {
        if (inv[i] > (i * (i - 1)) / 2) {
            return 0;
        }
    }

    // dp[len][inv]
    // solution for the prefix of length len, and inv inversion pairs

    // setup dp
    const m = 400;
    const MOD = 1e9 + 7;
    let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    // base case
    // i == 0, dp[0][j] = 0, j > 1, in memset
    // i == 0 && j == 0, dp[0][0] = 1
    dp[0][0] = 1;

    /*
    Note:
    suppose we have a sequence of length (l-1), and we want to extend it to 
    a sequence of length l, then what can happen to the number of inversion?

    you can increase the number of inversions by at most (l-1).

    so we need to check dp[i-1][j] for dp[i][c]
    where j = c-0, c-1, ..... , c-(l-1)
    */

    // recursion
    for (let i = 1; i <= n; i++) { // length
        // case 1, we have a requirement given
        // then just iterate for that value, 
        if (inv[i] !== -1) {
            for (let k = 0; k < i; k++) {
                if (inv[i] - k < 0) break;
                dp[i][inv[i]] = (dp[i][inv[i]] + dp[i - 1][inv[i] - k]) % MOD;
            }
        }
        // case 2 when we don't have any given requirement
        // then iterate over all the values
        else {
            for (let c = 0; c <= m; c++) {
                // maximum number of inversions
                if (c > (i * (i - 1)) / 2) break;

                for (let k = 0; k < i; k++) {
                    if (c - k < 0) break;
                    dp[i][c] = (dp[i][c] + dp[i - 1][c - k]) % MOD;
                }
            }
        }
    }

    // return the ans
    return dp[n][inv[n]];
};
