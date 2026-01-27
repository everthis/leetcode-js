/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    const m = grid.length, n = grid[0].length
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => Array(k + 1).fill(-1)))
    const costHash = {
        0: 0,
        1: 1,
        2: 1
    }
    const scoreHash = {
        0: 0,
        1: 1,
        2: 2
    }

    dp[0][0][0] = 0

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            for(let costUsed = 0; costUsed <= k; costUsed++) {
                if(dp[i][j][costUsed] === -1) continue
                const score = dp[i][j][costUsed]

                if(i + 1 < m) {
                    const nc = costUsed + costHash[grid[i + 1][j]]
                    if(nc <= k) {
                        dp[i + 1][j][nc] = Math.max(dp[i+1][j][nc], score + scoreHash[grid[i + 1][j]])
                    }
                }


                if(j + 1 < n) {
                    const nc = costUsed + costHash[grid[i][j + 1]]
                    if(nc <= k) {
                        dp[i][j + 1][nc] = Math.max(dp[i][j + 1][nc], score + scoreHash[grid[i][j + 1]])
                    }
                }
            }
        }
    }



    let res = -1

    for(let i = 0; i <= k; i++) res = Math.max(res, dp[m - 1][n - 1][i])

    return res
};
