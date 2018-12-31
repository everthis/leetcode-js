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
