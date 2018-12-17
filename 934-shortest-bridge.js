/**
 * @param {number[][]} A
 * @return {number}
 */
const shortestBridge = function(A) {
    let r = A.length;
    let c = A[0].length;
    let found = false;
    let queue = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (A[i][j]) {
                dfs(A, i, j, queue);
                found = true;
                break;
            }
        }
        if (found) break;
    }
    
    let replace = [];
    let count = 0;
    let cells = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length) {
        let pos = queue.shift();
        
        for (let i = 0; i < cells.length; i++) {
            let x = pos[0] + cells[i][0]; 
            let y = pos[1] + cells[i][1];
            
            if (0 <= x && x < r && 0 <= y && y < c && A[x][y] != 2) {
                if (A[x][y] == 1) return count;
                A[x][y] = 2;
                replace.push([x, y]);
            }
        }
        
        if (!queue.length) {
            queue = replace;
            replace = [];
            count++;
        }
    }
};

function dfs(A, x, y, queue) {
    if (x < 0 || x >= A.length || y < 0 || y >= A[0].length || A[x][y] == 0 || A[x][y] == 2) return;
    
    A[x][y] = 2;
    queue.push([x, y]);
    dfs(A, x-1, y, queue);
    dfs(A, x+1, y, queue);
    dfs(A, x, y-1, queue);
    dfs(A, x, y+1, queue);
}
