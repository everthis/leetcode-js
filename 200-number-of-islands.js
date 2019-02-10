/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    if (grid.length === 0) return 0;
    const totalRow = grid.length;
    const totalCol = grid[0].length;
    let res = 0;
    
    for (let i = 0; i < totalRow; i += 1) {
        for (let j = 0; j < totalCol; j += 1) {
            if (grid[i][j] === '1') {
                res += 1;
                dfs(grid, i, j, totalRow, totalCol);
            }
        }
    }
    
    return res;
};

const dfs = (grid, row, col, totalRow, totalCol) => {
    if (row < 0 || col < 0 || row === totalRow || col === totalCol || grid[row][col] === '0') {
       return;
    }
    
    grid[row][col] = '0';
    dfs(grid, row - 1, col, totalRow, totalCol);
    dfs(grid, row + 1, col, totalRow, totalCol);
    dfs(grid, row, col - 1, totalRow, totalCol);
    dfs(grid, row, col + 1, totalRow, totalCol);
}
