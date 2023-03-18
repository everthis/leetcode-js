/**
 * @param {number[][]} lcp
 * @return {string}
 */
const findTheString = function (lcp) {
  const n = lcp.length
  let c = 0
  const arr = new Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    if (arr[i] > 0) continue
    if (++c > 26) return ''
    for (let j = i; j < n; ++j) {
      if (lcp[i][j] > 0) arr[j] = c
    }
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      let v = i + 1 < n && j + 1 < n ? lcp[i + 1][j + 1] : 0
      v = arr[i] === arr[j] ? v + 1 : 0
      if (lcp[i][j] != v) return ''
    }
  }
  const res = []
  const ac = 'a'.charCodeAt(0)
  for (let a of arr) res.push(String.fromCharCode(ac + a - 1))
  return res.join('')
}
