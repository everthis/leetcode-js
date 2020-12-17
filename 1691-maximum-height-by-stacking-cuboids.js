/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function (cuboids) {
  let n = cuboids.length
  for (let c of cuboids) {
    c.sort((a, b) => a - b)
  }
  const { max } = Math
  cuboids.sort(compare)
  const f = Array(n)
  let ans = 0
  for (let i = 0; i < n; i++) {
    f[i] = cuboids[i][2]
    for (let j = 0; j < i; j++) {
      if (
        cuboids[i][0] <= cuboids[j][0] &&
        cuboids[i][1] <= cuboids[j][1] &&
        cuboids[i][2] <= cuboids[j][2]
      )
        f[i] = max(f[i], f[j] + cuboids[i][2])
    }
    ans = max(ans, f[i])
  }
  return ans
  function compare(a, b) {
    if (a[0] != b[0]) return b[0] - a[0]
    if (a[1] != b[1]) return b[1] - a[1]
    return b[2] - a[2]
  }
}

// another

/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function(cuboids) {
  cuboids.forEach((cuboid) => cuboid.sort((a, b) => a - b));
  cuboids.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    if (a[1] !== b[1]) return b[1] - a[1];
    return b[2] - a[2];
  });
  const n = cuboids.length;
  const dp = Array(n).fill(0);
  let res = 0;
  for (let j = 0; j < n; ++j) {
    dp[j] = cuboids[j][2];
    for (let i = 0; i < j; ++i) {
      if (cuboids[i][0] >= cuboids[j][0]
        && cuboids[i][1] >= cuboids[j][1]
        && cuboids[i][2] >= cuboids[j][2]
      ) {
        dp[j] = Math.max(dp[j], dp[i] + cuboids[j][2]);
      }
    }
    res = Math.max(res, dp[j]);
  }
  return res;
};
