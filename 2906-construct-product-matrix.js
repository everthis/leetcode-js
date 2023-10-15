/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
    const mod = 12345;
    const n = grid.length;
    const m = grid[0].length;

    const row = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            row[i] = (row[i] * grid[i][j]) % mod;
        }
    }

    const rowLeft = new Array(n).fill(1);
    const rowRight = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        rowLeft[i] = (i === 0) ? row[i] : rowLeft[i - 1] * row[i];
        rowLeft[i] = rowLeft[i] % mod;
    }
    for (let i = n - 1; i >= 0; i--) {
        rowRight[i] = (i === n - 1) ? row[i] : rowRight[i + 1] * row[i];
        rowRight[i] = rowRight[i] % mod;
    }

    const colLeft = new Array(n);
    const colRight = new Array(n);
    for (let i = 0; i < n; i++) {
        colLeft[i] = new Array(m);
        colRight[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            colLeft[i][j] = (j === 0) ? grid[i][j] : colLeft[i][j - 1] * grid[i][j];
            colLeft[i][j] = colLeft[i][j] % mod;
        }
        for (let j = m - 1; j >= 0; j--) {
            colRight[i][j] = (j === m - 1) ? grid[i][j] : colRight[i][j + 1] * grid[i][j];
            colRight[i][j] = colRight[i][j] % mod;
        }
    }

    const ans = new Array(n);
    for (let i = 0; i < n; i++) {
        ans[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            let tmp = 1;
            if (i - 1 >= 0) {
                tmp *= rowLeft[i - 1];
                tmp %= mod;
            }
            if (i + 1 < n) {
                tmp *= rowRight[i + 1];
                tmp %= mod;
            }
            if (j - 1 >= 0) {
                tmp *= colLeft[i][j - 1];
                tmp %= mod;
            }
            if (j + 1 < m) {
                tmp *= colRight[i][j + 1];
                tmp %= mod;
            }
            ans[i][j] = tmp;
        }
    }
    return ans;
};
