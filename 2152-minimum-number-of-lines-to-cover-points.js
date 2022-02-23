/**
 * @param {number[][]} points
 * @return {number}
 */
const minimumLines = function(points) {
  const n = points.length;
  const connects = Array.from({ length: n }, () => Array(n).fill(0));
  for(let i = 0; i < n; ++i) {
      for(let j = i + 1; j < n; ++j) {
          connects[i][j] = (1 << i) | (1 << j);
          let dx = points[j][0] - points[i][0];
          let dy = points[j][1] - points[i][1];
          for(let k = j + 1; k < n; ++k) { // check if k will be on the line connecting i and j.
              let dx2 = points[k][0] - points[i][0];
              let dy2 = points[k][1] - points[i][1];
              if (dx * dy2 == dy * dx2) {
                  connects[i][j] |= (1 << k);
              }
          }
      }
  }
  const dp = new Array(1<<n).fill(Infinity);
  return helper(n, 0, dp, connects);
};

function helper(n, mask, dp, connects) {
  if (dp[mask] == Infinity) {
      let has = numOfOne(mask);
      if (has == n) { // if all the points have been connected
          dp[mask] = 0;
      } else if (has >= n - 2) { // if only 2 points left
          dp[mask] = 1;
      } else { // if there are more than 2 points, try a line connecting first to second, third, ...
          let i = 0;
          for(let x = (1 << i); i < n; ++i, x <<= 1) {
              if ((mask & x) == 0) {
                  break;
              }
          }
          for(let j = i + 1, x = (1 << j); j < n; ++j, x <<= 1) {
              if ((mask & x) == 0) {
                  let mask2 = mask | connects[i][j];
                  dp[mask] = Math.min(dp[mask], 1 + helper(n, mask2, dp, connects));
              }
          }
      }
  }
  return dp[mask];
}

function numOfOne(num) {
  const str = (num >>> 0).toString(2)
  let res = 0
  for(let ch of str) {
    if(ch === '1') res++
  }
  return res
}
