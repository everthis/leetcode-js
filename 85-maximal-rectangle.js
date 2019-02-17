/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0;
    const m = matrix.length;
    const n = matrix[0].length;
    const left = new Array(n).fill(0)
    const right = new Array(n).fill(n)
    const height = new Array(n).fill(0);
    let maxA = 0;
    for(let i = 0; i < m; i++) {
        let cur_left = 0, cur_right = n;
        // compute height (can do this from either side)
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === '1') height[j]++; 
            else height[j] = 0;
        }
        // compute left (from left to right)
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] ==='1') left[j] = Math.max(left[j], cur_left);
            else {left[j] = 0; cur_left = j + 1;}
        }
        // compute right (from right to left)
        for(let j = n - 1; j >= 0; j--) {
            if(matrix[i][j] === '1') right[j] = Math.min(right[j], cur_right);
            else {right[j] = n; cur_right = j;}    
        }
        // compute the area of rectangle (can do this from either side)
        for(let j = 0; j < n; j++)
            maxA = Math.max(maxA, (right[j]-left[j]) * height[j]);
    }
    return maxA; 
};
