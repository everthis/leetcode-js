/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function(grid) {
    const DIRS = [ [ 1, 1 ], [ 1, -1 ], [ -1, -1 ], [ -1, 1 ] ];
    const m = grid.length;
    const n = grid[0].length;
    const memo = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(1 << 3).fill(0))
    );
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 1) {
                continue;
            }
            const maxs = [m - i, j + 1, i + 1, n - j];
            for (let k = 0; k < 4; k++) {
                if (maxs[k] > ans) {
                    ans = Math.max(ans, dfs(i, j, k, 1, 2, grid, memo) + 1);
                }
            }
        }
    }
    return ans;

    function dfs(i, j, k, canTurn, target, grid, memo) {
        i += DIRS[k][0];
        j += DIRS[k][1];
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== target) {
            return 0;
        }
        const mask = (k << 1) | canTurn;
        if (memo[i][j][mask] > 0) {
            return memo[i][j][mask];
        }
        let res = dfs(i, j, k, canTurn, 2 - target, grid, memo);
        if (canTurn === 1) {
            const maxs = [grid.length - i - 1, j, i, grid[i].length - j - 1];
            k = (k + 1) % 4;
            if (maxs[k] > res) {
                res = Math.max(res, dfs(i, j, k, 0, 2 - target, grid, memo));
            }
        }
        memo[i][j][mask] = res + 1;
        return memo[i][j][mask];
    }
};
