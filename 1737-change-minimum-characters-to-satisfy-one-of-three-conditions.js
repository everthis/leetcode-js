/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const minCharacters = function (a, b) {
  const n1 = a.length,
    n2 = b.length
  const cnt1 = Array(26).fill(0)
  const cnt2 = Array(26).fill(0)
  const aCode = 'a'.charCodeAt(0)
  for (let c of a) ++cnt1[c.charCodeAt(0) - aCode]
  for (let c of b) ++cnt2[c.charCodeAt(0) - aCode]
  let res = n1 - Math.max(...cnt1) + n2 - Math.max(...cnt2)
  for (let i = 0; i < 25; ++i) {
    let cur1 = 0,
      cur2 = 0
    for (let j = 0; j < 26; ++j) {
      if (j <= i) {
        cur1 += cnt2[j]
        cur2 += cnt1[j]
      } else {
        cur1 += cnt1[j]
        cur2 += cnt2[j]
      }
    }
    res = Math.min(Math.min(cur1, cur2), res)
  }
  return res
}
