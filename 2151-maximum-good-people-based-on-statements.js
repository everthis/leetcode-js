/**
 * @param {number[][]} statements
 * @return {number}
 */
const maximumGood = function (statements) {
  const n = statements.length
  let res = 0,
    c = (1 << n) - 1
  for (let i = 0; i < c + 1; i++) {
    let s = dec2bin(i)
    s = '0'.repeat(n - s.length) + s
    let arr = [],
      f = 1
    for (let i = 0; i < n; i++) {
      if (s[i] === '1') arr.push(i)
    }
    for (let i of arr) {
      for (let j = 0; j < n; j++) {
        if (statements[i][j] !== 2 && statements[i][j] !== +s[j]) {
          f = 0
          break
        }
      }
      if (!f) break
    }
    if (f) res = Math.max(res, cnt(s, '1'))
  }

  return res
}
function cnt(s, ch) {
  let res = 0
  for (let e of s) {
    if (e === ch) res++
  }
  return res
}
function dec2bin(dec) {
  return (dec >>> 0).toString(2)
}
