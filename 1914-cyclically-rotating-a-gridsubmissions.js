/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const rotateGrid = function(grid, k) {
  const m = grid.length, n = grid[0].length
  let top = 0, left = 0, right = n - 1, bottom = m - 1
  while(top < bottom && left < right) {
    const num = (right - left + 1) * 2 + (bottom - top + 1) * 2 - 4
    let rem = k % num
    while(rem) {
      const tmp = grid[top][left]
      // top
      for(let i = left; i < right; i++) {
        grid[top][i] = grid[top][i + 1]
      }
      // right
      for(let i = top; i < bottom; i++) {
        grid[i][right] = grid[i + 1][right]
      }
      // bottom
      for(let i = right; i > left; i--) {
        grid[bottom][i] = grid[bottom][i - 1]
      }
      // left
      for(let i = bottom; i > top; i--) {
        grid[i][left] = grid[i - 1][left]
      }
      grid[top + 1][left] = tmp
      rem--
    }
    left++
    top++
    right--
    bottom--
  }
  return grid
};

// another

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    var m = grid.length;
    var n = grid[0].length;
	
	  // step1: loop each layer
    var layer = Math.min(n/2, m/2);
    for(l = 0; l<layer; l++) {
	     // step2: flat layer "l" into one-dimension array
        var cur = [];
        // top
        for(var j = l; j<n-l; j++)
        {
            cur.push(grid[l][j]);
        }
        // right
        for(var i = l+1; i<m-l; i++)
        {
            cur.push(grid[i][n-l-1]);
        }
        // bottom
        for(var j = n-l-2; j>=l; j--)
        {
            cur.push(grid[m-l-1][j]);
        }
        // left
        for(var i = m-l-2; i>l; i--)
        {
            cur.push(grid[i][l]);
        }
		
        // step3: rotation (k%len) on one-dimension array
        var d = cur.length;
        var offset = k % d;
        cur = [...cur.slice(offset, d), ...cur.slice(0, offset)];
		
        // step4: refill rotated array back to 2D array at current layer
        var index = 0;
        // top
        for(var j = l; j<n-l; j++)
        {
            grid[l][j] = cur[index++];
        }
        // right
        for(var i = l+1; i<m-l; i++)
        {
            grid[i][n-l-1] = cur[index++];
        }
        // bottom
        for(var j = n-l-2; j>=l; j--)
        {
            grid[m-l-1][j] = cur[index++];
        }
        // left
        for(var i = m-l-2; i>l; i--)
        { 
            grid[i][l] = cur[index++];
        }
    }
    return grid;
};
