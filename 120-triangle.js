/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
  const n = triangle.length;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      let self = triangle[i][j]; //获取第（i+1）行（j+1）个数字
      let res = Math.min(
        triangle[i + 1][j] + self,
        triangle[i + 1][j + 1] + self
      ); //得到这一行与下一行相邻数的和的最小值
      triangle[i][j] = res; //更新第（i+1）行第（j+1）个数字
    }
  }

  return triangle[0][0];
};

// another

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
  const m = triangle.length, n = triangle.at(-1).length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity))
  dp[1][1] = triangle[0][0]
  for(let i = 2; i <= m; i++) {
    for(let j = 1; j <= triangle[i - 1].length; j++) {
      if(j === 1) dp[i][j] = dp[i - 1][j] + triangle[i - 1][j - 1]
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i - 1][j - 1] 
    }
  }
  let res = Infinity
  for (let j = 0; j <= n; j++) {
    res = Math.min(res, dp[m][j])
  }
  return res
};
