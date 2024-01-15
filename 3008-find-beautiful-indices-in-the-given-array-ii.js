/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  let res = []
  let v1 = []
  let v2 = []
  getPatternMatchingIndex(s, a, v1)
  getPatternMatchingIndex(s, b, v2)
  for (let i = 0, j = 0; i < v1.length; i++) {
    while (j < v2.length && v1[i] > v2[j] && Math.abs(v1[i] - v2[j]) > k) {
      j++
    }
    if (j < v2.length && Math.abs(v1[i] - v2[j]) <= k) {
      res.push(v1[i])
    }
  }
  return res
}

function getPatternMatchingIndex(s, a, v) {
  let t = a + '@' + s
  let lps = [0]
  for (let i = 1; i < t.length; i++) {
    let ind = lps[i - 1]
    while (ind > 0 && t[ind] !== t[i]) {
      ind = lps[ind - 1]
    }
    lps.push(t[ind] === t[i] ? ind + 1 : 0)
  }
  for (let i = 0; i < lps.length; i++) {
    if (lps[i] === a.length) {
      v.push(i - 2 * a.length)
    }
  }
}
