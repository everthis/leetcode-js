/**
 * @param {string} s
 * @return {number}
 */
const minCut = function(s) {
  const n = s.length
  const cut = new Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++) cut[i] = i - 1
  for (let i = 0; i < n; i++) {
    // odd
    for (let j = 0; i + j < n && i - j >= 0 && s[i + j] === s[i - j]; j++) {
      cut[i + j + 1] = Math.min(cut[i + j + 1], cut[i - j] + 1)
    }
    // even
    for (
      let j = 1;
      i + j < n && i - j + 1 >= 0 && s[i + j] === s[i - j + 1];
      j++
    ) {
      cut[i + j + 1] = Math.min(cut[i + j + 1], cut[i - j + 1] + 1)
    }
  }
  return cut[n]
}
