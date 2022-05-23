/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
  let res = 1
  const ma = stockPrices
  const n = ma.length
  if(n === 0 || n === 1) return 0
  ma.sort((a, b) => a[0] - b[0])
  const eps = 1e-30
  let dx = ma[1][0] - ma[0][0], dy = ma[1][1] - ma[0][1]
  for(let i = 2; i < n; i++) {
    const cur = ma[i], pre = ma[i - 1]
    const dxx = cur[0] - pre[0], dyy = cur[1] - pre[1]
    if(BigInt(dxx) * BigInt(dy) !== BigInt(dx) * BigInt(dyy)) res++
    dx = dxx
    dy = dyy
  }
  
  return res
};

function product(p1, p2, p3) {
    // 首先根据坐标计算p1p2和p1p3的向量，然后再计算叉乘
    // p1p2 向量表示为 (p2.x-p1.x,p2.y-p1.y)
    // p1p3 向量表示为 (p3.x-p1.x,p3.y-p1.y)
    return (p2.x-p1.x)*(p3.y-p1.y) - (p2.y-p1.y)*(p3.x-p1.x);
}
