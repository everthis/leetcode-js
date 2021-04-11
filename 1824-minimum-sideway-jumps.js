/**
 * @param {number[]} obstacles
 * @return {number}
 */
const minSideJumps = function(obstacles) {
  const n = obstacles.length
  const { max, min } = Math
    const dp = [10000000, 1, 0, 1];
    for (let i of obstacles) {
        dp[i] = dp[0];
        for (let j = 1; j <= 3; ++j)
            if (i !== j)
                dp[j] = min(dp[1] + (j != 1 ? 1 : 0), dp[2] + (j != 2 ? 1 : 0), dp[3] + (j != 3 ? 1 : 0));
    }
    return min(dp[1], dp[2], dp[3]);
};

