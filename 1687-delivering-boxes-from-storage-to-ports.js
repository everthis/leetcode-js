/**
 * @param {number[][]} boxes
 * @param {number} portsCount
 * @param {number} maxBoxes
 * @param {number} maxWeight
 * @return {number}
 */
var boxDelivering = function (boxes, portsCount, maxBoxes, maxWeight) {
  const n = boxes.length
  const diff = Array(n).fill(0)
  for (let i = 0; i < n - 1; i++) {
    if (boxes[i][0] != boxes[i + 1][0]) diff[i] = 1
  }
  const dp = Array(n).fill(0)
  let cur = 0
  let cbox = 0
  let start = 0
  for (let i = 0; i < n; i++) {
    if (i - start == maxBoxes) {
      cur -= boxes[start][1]
      cbox -= diff[start]
      start += 1
    }
    cur += boxes[i][1]
    if (i > 0) cbox += diff[i - 1]
    while (cur > maxWeight) {
      cur -= boxes[start][1]
      cbox -= diff[start]
      start += 1
    }
    while (start < i && dp[start] == dp[start - 1]) {
      cur -= boxes[start][1]
      cbox -= diff[start]
      start += 1
    }
    dp[i] = (start == 0 ? 0 : dp[start - 1]) + cbox + 2
  }
  return dp[n - 1]
}
