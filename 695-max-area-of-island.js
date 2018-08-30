/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
    let res = 0
    const seen = []
    for(let i = 0; i < grid.length; i++) {
        seen[i] = []
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            res = Math.max(res, area(i, j, seen, grid))
        }
    }
    return res
};

function area(r, c, seen, grid) {
    console.log(grid)
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || seen[r][c] || grid[r][c] == 0) return 0;
    seen[r][c] = true;
    return (1 + area(r+1, c, seen, grid) + area(r-1, c, seen, grid) + area(r, c-1, seen, grid) + area(r, c+1, seen, grid));
}

console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]))
console.log(maxAreaOfIsland([[1,0],[1,1]]))
console.log(maxAreaOfIsland([[1,1],[1,0]]))
