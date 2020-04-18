/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function (n, k) {
  const res = [1]
  while (k) {
    const index = res.length
    if (index % 2 === 1) {
      res.push(res[index - 1] + k)
    } else {
      res.push(res[index - 1] - k)
    }
    k -= 1
  }
  if (res.length < n) {
    for (let i = res.length + 1; i <= n; i += 1) {
      res.push(i)
    }
  }
  return res
}
