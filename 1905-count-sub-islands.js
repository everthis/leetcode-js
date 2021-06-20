/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function(grid1, grid2) {
    let m = grid2.length, n = grid2[0].length, res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) res += dfs(grid1, grid2, i, j);                 
        }
    }
    return res;  
};

function dfs(B, A, i, j) {
    let m = A.length, n = A[0].length, res = 1;
    if (i < 0 || i == m || j < 0 || j == n || A[i][j] == 0) return 1;
    A[i][j] = 0;
    res &= dfs(B, A, i - 1, j);
    res &= dfs(B, A, i + 1, j);
    res &= dfs(B, A, i, j - 1);
    res &= dfs(B, A, i, j + 1);
    return res & B[i][j];
}
