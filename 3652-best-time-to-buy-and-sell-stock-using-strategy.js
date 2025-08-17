/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
  let a = 0,
    b = 0,
    c = 0

  function calc(arr) {
    let res = 0
    for (let i = 0; i < prices.length; i++) {
      res += prices[i] * arr[i]
    }
    return res
  }

  const n = strategy.length
  const base = calc(strategy)
  const h = Math.floor(k / 2)
  const A = strategy.map((s, i) => -s * prices[i])
  const B = strategy.map((s, i) => (1 - s) * prices[i])
  const pA = new Array(n + 1).fill(0)
  const pB = new Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    pA[i + 1] = pA[i] + A[i]
    pB[i + 1] = pB[i] + B[i]
  }

  let res = 0
  for (let i = 0; i <= n - k; i++) {
    const first = pA[i + h] - pA[i]
    const second = pB[i + k] - pB[i + h]
    const d = first + second
    res = Math.max(d, res)
  }

  return base + res
};
