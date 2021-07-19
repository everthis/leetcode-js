/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function(points) {
  const m = points.length, n = points[0].length
  let prev = points[0].slice()
  for(let i = 1; i < m; i++) {
    const left = []
    left[0] = prev[0]
    // left to right
    for(let j = 1; j < n; j++) {
      left[j] = Math.max(prev[j], left[j - 1] - 1)
    }
    const right = []
    right[n - 1] = prev[n - 1]
    // right to left
    for(let j = n - 2; j >= 0; j--) {
      right[j] = Math.max(prev[j], right[j + 1] - 1)
    }

    const cur = []
    for(let j = 0; j < n; j++) {
      cur[j] = Math.max(left[j], right[j]) + points[i][j]
    }
    prev = cur
  }

  return Math.max(...prev)
};

// another

/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function(points) {
    let m = points.length, n = points[0].length;
    let result = 0;
    // dp
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0) {
                dp[i][j] = points[i][j];
            } else {
                dp[i][j] = Math.max(points[i][j] + dp[i - 1][j], dp[i][j]);
            }
        }
        for (let j = 0; j < n; j++) {
            // right
            for (let k = 1; k < n - j; k++) {
                if (dp[i][j + k] >= dp[i][j] - k) {
                    break;
                }
                dp[i][j + k] = dp[i][j] - k;
            }
            for (let k = 1; k <= j; k++) {
                if (dp[i][j - k] >= dp[i][j] - k) {
                    break;
                }
                dp[i][j - k] = dp[i][j] - k;
            }
        }
    }
    for (let j = 0; j < n; j++) {
        result = Math.max(result, dp[m - 1][j]);
    }
    return result;
};
