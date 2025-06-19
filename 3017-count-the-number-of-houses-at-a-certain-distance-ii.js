/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function (n, x, y) {
  if (x > y) {
    ;[x, y] = [y, x]
  }
  const res = new Array(n).fill(0)
  for (let i = 1; i <= n; ++i) {
    res[0] += 2 // go left and right
    res[Math.min(i - 1, Math.abs(i - y) + x)]-- // reach 1 then stop
    res[Math.min(n - i, Math.abs(i - x) + 1 + n - y)]-- // reach n then stop
    res[Math.min(Math.abs(i - x), Math.abs(y - i) + 1)]++ // reach x then split
    res[Math.min(Math.abs(i - x) + 1, Math.abs(y - i))]++ // reach y then split
    let r = Math.max(x - i, 0) + Math.max(i - y, 0)
    res[r + Math.floor((y - x) / 2)]-- // i -> x -> y <- x
    res[r + Math.floor((y - x + 1) / 2)]-- // i -> y -> x <- y
  }
  for (let i = 1; i < n; ++i) {
    res[i] += res[i - 1]
  }
  return res
}
